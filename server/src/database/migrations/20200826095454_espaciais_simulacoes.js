
exports.up = function(knex) {
    return knex.schema.createTable('espacial_simulacoes', function(table){
        table.increments().primary();
        table.text('nome_exibicao').notNullable();
        table.text('dados_simulacao').notNullable();
    });
  };
  
exports.down = function(knex) {
    return knex.schema.dropTable('espacial_simulacoes');
};
  
