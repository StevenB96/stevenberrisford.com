/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('content', function(table) {
    table.increments('id').primary();
    table.string('title');
    table.string('text');
    table.string('link');
    table.string('media_link');
    table.integer('media_type');
    table.integer('content_type');
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('content');
};
