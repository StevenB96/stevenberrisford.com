/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return Promise.all([
        knex.schema.createTable('site', function (table) {
            table.increments('id').primary();
            table.string('banner_text');
            table.string('description');
            table.string('background_image_link');
            table.string('project_background_image_link');
            table.string('article_background_image_link');
            table.string('hobby_background_image_link');
            table.timestamps(true, true);
        }),
        knex.schema.createTable('profile', function (table) {
            table.increments('id').primary();
            table.string('full_name');
            table.string('personal_summary');
            table.string('picture_link');
            table.string('job_title');
            table.string('cv_link');
            table.string('phone_number');
            table.string('email_address');
            table.string('post_address');
            table.timestamps(true, true);
        }),
        knex.schema.createTable('project', function (table) {
            table.increments('id').primary();
            table.integer('profile').unsigned().references('id').inTable('profile').onDelete('CASCADE');
            table.string('title');
            table.string('description');
            table.integer('order');
            table.timestamps(true, true);
        }),
        knex.schema.createTable('content', function (table) {
            table.increments('id').primary();
            table.integer('project').unsigned().references('id').inTable('project').onDelete('CASCADE');
            table.integer('profile').unsigned().references('id').inTable('profile').onDelete('CASCADE');
            table.string('title');
            table.string('description');
            table.string('media_id');
            table.string('media_link');
            table.integer('media_type');
            table.string('type');
            table.integer('order');
            table.timestamps(true, true);
        }),
        knex.schema.createTable('reference', function (table) {
            table.increments('id').primary();
            table.integer('profile').unsigned().references('id').inTable('profile').onDelete('CASCADE');
            table.string('author');
            table.string('role');
            table.string('organisation');
            table.string('text');
            table.integer('order');
            table.timestamps(true, true);
        }),
    ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return Promise.all([
        knex.schema.dropTableIfExists('site'),
        knex.schema.dropTableIfExists('profile'),
        knex.schema.dropTableIfExists('project'),
        knex.schema.dropTableIfExists('content'),
        knex.schema.dropTableIfExists('reference'),
    ]);
};
