import Knex from 'knex'

//cria os itens
export async function up(knex: Knex) {
  return knex.schema.createTable('items', table => {
    table.increments('id').primary()
    table.string('image').notNullable
    table.string('title').notNullable
   
  })
}

//delata os itens
export async function down(knex: Knex) {
  return knex.schema.dropTable('items')
}