
exports.up = function(knex) { 
    return knex.schema.createTable('base_simulacoes', function(table){
        table.increments().primary();
        table.text('nome_exibicao').notNullable();
        table.json('dados_base').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('base_simulacoes');
  
};
