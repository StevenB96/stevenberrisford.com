/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('profile', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('job_title').notNullable();
    table.string('description').notNullable();
    table.string('phone').notNullable();
    table.string('email').notNullable();
    table.string('address').notNullable();
    table.string('profile_picture_link').notNullable();
    table.string('background_image_link').notNullable();
    table.string('cv_link').notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('profile');
};
