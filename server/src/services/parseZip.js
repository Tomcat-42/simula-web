const fs = require("fs");
const path = require("path");
const util = require("util");
// const unzip = require("unzip");
const extract = require("extract-zip");
const connection = require("../database/connection");
// const neatCsv = require("neat-csv");
const { log } = require("./loggerService");
//const { stdout } = require("proces");
// const parse = require("csv-parse");
// const { convertCSVToArray } = require("convert-csv-to-array");

const parse = require("csv-parse");
const neatCsv = require("neat-csv");

async function extractZip(zipPath) {
    try {
        const extractBasePath = path.resolve("./", "temp");
        const extractDirPath = path.resolve(
            extractBasePath,
            path.basename(zipPath, path.extname(zipPath))
        );
        const extractZipPath = path.join(extractBasePath, zipPath);

        await extract(extractZipPath, {
            dir: extractDirPath,
        });
        return `${extractDirPath}`;
    } catch (error) {
        console.log(`Erro na extração do zip: ${error}`);
    }
}

function processaArquivo(nomeArquivo, cb) {
    var dados_simulacao;
    let csvData = [];
    fs.createReadStream(nomeArquivo)
        .pipe(parse({ delimiter: ";" }))
        .on("data", function (csvrow) {
            csvData.push(csvrow);
        })
        .on("error", (err) => {
            log("wrongFileName", err);
        })
        .on("end", function () {
            let coordenadas = [];
            let codigosAgentes = [];
            let x = 0; // apenas para ler poucas entradas e ficar mais rapido de testar

            // console.log(csvData);

            for (let i = 0; i < csvData.length; i++) {
                coordenadas.push([csvData[i][0], csvData[i][1]]);

                let codAgente = [];

                for (let j = 2; j < csvData[i].length; j++)
                    codAgente.push(csvData[i][j]);

                if (x++ > 20)
                    // limite de entradas para teste
                    break;
                codigosAgentes.push(codAgente);
            }

            // console.log(coordenadas);

            let ciclos = codigosAgentes[0].length;
            dados_simulacao = [ciclos, coordenadas, codigosAgentes];

            cb(dados_simulacao);
        });
}

/* TODO: Refatorar para promise para não precisar utilizar o util.promisify*/
function diretoryTreeToObj(dir, done) {
    var results = {};

    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var pending = list.length;

        if (!pending) {
            return done(null, {
                [path.basename(dir)]: results,
            });
        }

        console.log("RESULTADO:", JSON.stringify(results));
        results = list.map(function (file) {
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    diretoryTreeToObj(file, function (err, res) {
                        results = { ...results, [path.basename(file)]: res };
                        if (!--pending) done(null, results);
                    });
                } else {
                    /*TODO: Retornar uma promise com o array do csv*/
                    return processaArquivo(file, (data) => {
                        //console.log(data);
                        results = { ...results, [path.basename(file)]: data };
                        // console.log(results);
                        // console.log(pending);
                        //  if (!--pending) done(null, results);
                        if (!--pending) return results;
                    });

                    // results = { ...results, [path.basename(file)]: [] };

                    //if (!--pending) done(null, results);
                }
            });
        });
    });
}

const diretoryTreeToObjPromise = util.promisify(diretoryTreeToObj);

async function uploadDados(nome_arquivo, nome_exibicao) {
    try {
        const zipPath = await extractZip(nome_arquivo);
        const dirObj = await diretoryTreeToObjPromise(zipPath);
        const dados_base = JSON.stringify(dirObj);
        console.log(dirObj);

        const obj = await connection("base_simulacoes").insert({
            nome_exibicao,
            dados_base,
        });
        console.log(obj);

        // if (obj == null) {
        //     log("onPutFileDB", err);
        // }
    } catch (err) {
        console.log("Erro uploadDados zip: " + err);
    }
}

if (process.argv.length < 3) {
    log("notFileName");
} else {
    const nomeArquivo = process.argv[2];
    const nomeExibicao = process.argv[3];
    uploadDados(nomeArquivo, nomeExibicao);
}
