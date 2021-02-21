// const fs = require("fs");
const path = require("path");
const unzip = require("unzip");
const connection = require("../database/connection");
// const neatCsv = require("neat-csv");
const { log } = require("./loggerService");
//const { stdout } = require("proces");
// const parse = require("csv-parse");

// async function extractZip(zipPath) {
//     try {
//         const dirName = path.basename(zipPath, path.extname(zipPath));
//         const dirPath = path.dirname(zipPath);
//         fs.createReadStream(dirPath).pipe(unzip.Extract({ path: dirPath }));
//         return `${dirPath}/${dirName}`;
//     } catch (error) {
//         console.log(`Erro na extração do zip: ${error}`);
//     }
// }

async function extractZip(zipPath) {
    return new Promise((resolve, reject) => {
        const dirName = path.basename(zipPath, path.extname(zipPath));
        const dirPath = path.dirname(zipPath);
        fs.createReadStream(dirPath)
            .pipe(unzip.Extract({ path: dirPath }))
            .on("error", (err) => {
                log("wrongFileName", err);
            })
            .on("end", function () {
                resolve(`${dirPath}/${dirName}`);
            });
    });
}

async function uploadDados(nome_arquivo, nome_exibicao) {
    try {
        const zipPath = await extractZip(nome_arquivo);
        console.log(zip_path);

        // const obj = await connection("base_simulacoes").insert({
        //     nome_exibicao,
        //     dados_base,
        // });

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
    console.log(nomeArquivo);
    console.log(nomeExibicao);

    uploadDados(nomeArquivo, nomeExibicao);
}
