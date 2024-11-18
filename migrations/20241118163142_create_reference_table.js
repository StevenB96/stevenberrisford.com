/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('reference', function(table) {
        table.increments('id').primary();
        table.string('author').notNullable();
        table.string('role').notNullable();
        table.string('organisation').notNullable();
        table.string('text').notNullable();
        table.integer('order');
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('reference');
};
