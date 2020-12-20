const fs = require('fs');

module.exports = {
    async log(logType, error = ""){
        let localTime = new Date();
        let logMessage = "[ "+localTime+" ]";
        let logFile;
        switch(logType){
            //logService
            case "logError": 
                logMessage += "Erro, não foi possivel realizar o log.";
                logFile = "loggerServiceLog.log";
            break;

            // loadFileDbService
            case "notFileName": 
                logMessage += "Erro, o nome do arquivo não foi encaminhado ao serviço";
                logFile = "uploadFileLog.log";
            break;
            case "wrongFileName": 
                logMessage += "Erro, erro ao abrir o arquivo";
                logFile = "uploadFileLog.log";
            break;
            case "onPutFileDB": 
                logMessage += "Erro, não foi possivel registrar as informações no banco";
                logFile = "uploadFileLog.log";
            break;
            case "defaultLoadFileDb": 
                logMessage += "Sem Erros";
                logFile = "uploadFileLog.log";
            break;
        }
        logMessage += ": [ " + error + " ]\n";
        fs.appendFile('./logs/'+logFile, logMessage, (err, data)=>{
            if(err){
                console.log("Erro ao realizar log " + err);
                module.exports.log("logError", err);
            }
        });
    }
}