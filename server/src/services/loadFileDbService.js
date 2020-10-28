const fs = require("fs");
const neatCsv = require("neat-csv");
const connection = require("../database/connection");
const { log } = require("./loggerService");
const { stdout } = require("process");
var parse = require("csv-parse");

async function processaArquivo(nomeArquivo) {
    return new Promise((resolve, reject) => {
        var dados_simulacao;
        let csvData = [];
        fs.createReadStream("./temp/" + nomeArquivo)
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

                resolve(dados_simulacao);
            });
    });
}

async function uploadDados(nomeArquivo, nome_exibicao) {
    try {
        dados_simulacao = await processaArquivo(nomeArquivo);

        const obj = await connection("espacial_simulacoes").insert({
            nome_exibicao,
            dados_simulacao,
        });

        if (obj == null) {
            log("onPutFileDB", err);
        }
    } catch (err) {
        console.log("Erro uploadDados: " + err);
    }
}

if (process.argv.length < 3) {
    log("notFileName");
} else {
    let nomeArquivo = process.argv[2];
    let nome_exibicao = process.argv[3];

    uploadDados(nomeArquivo, nome_exibicao);
}
