const fs = require("fs");
const path = require("path");
const { get } = require("../routes");
var csv = require("csv-parse");


module.exports = {
    all (request, response){
        let files = fs.readdirSync(__dirname+"/../../data");
        return response.json(files);
    },
    index (request, response){
        let csvData = [];
        let dados_simulacao;
        const { file } = request.params;
        
        fs.createReadStream(__dirname + "/../../data/simulacao/MonteCarlo_0/Simulacao_0/Espacial_Humanos.csv")
            .pipe(csv({ separator: ";" }))
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
                        break;
                    codigosAgentes.push(codAgente);
                }

                let ciclos = codigosAgentes[0].length;
                dados_simulacao = [ciclos, coordenadas, codigosAgentes];

                response.json(dados_simulacao);
            });
    }
}