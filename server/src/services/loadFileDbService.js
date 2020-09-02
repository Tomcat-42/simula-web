const fs = require('fs');
const neatCsv = require('neat-csv');
const connection = require('../database/connection');
const { log } = require('./loggerService');
const { stdout } = require('process');
var parse = require('csv-parse');

if(process.argv.length < 3){
    log('notFileName');
}
else{
    let nomeArquivo = process.argv[2], nome_exibicao = process.argv[2];
    var csvData=[];
    fs.createReadStream("./temp/" + nomeArquivo)
        .pipe(parse({delimiter: ';'}))
        .on('data', function(csvrow) {
            csvData.push(csvrow);        
        })
        .on('error', (err) => {
            console.log(err);
            log("wrongFileName", err);
        }).on('end',function() {
            let coordenadas = [];
            let codigosAgentes = [];
            let i = 0; // apenas para ler poucas entradas e ficar mais rapido de testar

            console.log(csvData[0][0]);

            for(let ponto in csvData){
                console.log(ponto);
                coordenadas.push([ponto[0], ponto[1]]);

                let codAgente = [];

                for(let i = 2; i < ponto.length; i++)
                    codAgente.push(ponto[i]);
                    
                if(i++ > 20) // limite de entradas para teste
                    break;
                codigosAgentes.push(codAgente);
            }

            let ciclos = codigosAgentes[0].length;
            let dados_simulacao = [
                ciclos,
                coordenadas,
                codigosAgentes
            ];

            /*
            const [id] = await connection('espacial_simulacoes').insert({
                nome_exibicao,
                dados_simulacao
            });
            */
            
            //console.log(codigosAgentes);
            if(null){
                log("onPutFileDB", err);
            }
            //log('defaultLoadFileDb', process.stdout);   
        });  
}