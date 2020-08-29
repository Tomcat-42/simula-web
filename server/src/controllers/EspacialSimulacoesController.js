const connection = require('../database/connection');


module.exports = {
    async create(request, response){
        const { file } = request;

        /*
        const { nome_exibicao, dados_simulacao } = request.body;
        id = await connection('espacial_simulacoes')
            .select('espacial_simulacoes.*');
        */

        console.log(file);

        return response.json("fim");
    }
}