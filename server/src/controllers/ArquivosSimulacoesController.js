const fs = require("fs");
const path = require("path");
const { get } = require("../routes");
var csv = require("csv-parse");

const transformation = require('transform-coordinates')


module.exports = {

    // Retorna a istagem de simulações na pasta data
    all (request, response){
        let files = fs.readdirSync(__dirname+"/../../data");
        return response.json(files);
    },

    // Retorna os dados de uma simulação
    index (request, response){
        let csvData = [];
        const { file } = request.params;
        const transform = transformation('EPSG:31982', 'EPSG:4326')
        
        fs.createReadStream(__dirname + `/../../data/${file}/MonteCarlo_0/Simulacao_0/Espacial_Humanos.csv`)
            .pipe(csv({ separator: ";" }))
            .on("data", function (csvrow) {
                let [a] = csvrow;
                csvData.push(a);
            })
            .on("error", (err) => {
                log("wrongFileName", err);
            })
            .on("end", function () {
                let coordenadas = [];
                let codigosAgentes = [];
                let count = 0; // apenas para ler poucas entradas e ficar mais rapido de testar

                // console.log(csvData);

                for (let line of csvData) {
                    let lineData   = line.split(';')
                    let codAgente  = [];
                    lineData       = lineData.map(d=>parseInt(d));
                    let {x, y} = transform.forward({x: lineData[0], y: lineData[1]})
                    coordenadas.push([y, x]);

                    for (let i = 2; i < lineData.length-1; i++)
                        codAgente.push(lineData[i]);

                    codigosAgentes.push(codAgente);
                    if (count++ > 200)
                        break;
                }

                let ciclos = codigosAgentes[0].length;
                console.log(coordenadas)
                response.json({ciclos, coordenadas, codigosAgentes});
            });
    }
}