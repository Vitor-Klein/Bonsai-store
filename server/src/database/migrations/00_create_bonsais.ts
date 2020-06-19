import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('bonsais', table => {
    table.increments('id').primary()
    table.string('specie').notNullable()
    table.string('age').notNullable()
    table.string('fertilization_time').notNullable()
    table.string('description').notNullable()
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('bonsais')
}