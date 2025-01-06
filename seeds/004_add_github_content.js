const types = require('../constants/types');
var defineEnv = require('../config/defineEnv');

/**
 * Set env variables for app.
 */

defineEnv('..');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('content').insert([
    {
      title: 'React/Express Boilerplate',
      text: 'When developing a new project, I often use my React/Express Boilerplate. It has most of the technologies I use to build JS web applications, and is a demonstration of an approach I take to small personal projects.',
      link: 'https://github.com/StevenB96/node.js-boilerplate',
      media_link: `${process.env.IP_DOMAIN}/public/images/content/github_mark.png`,
      media_type: types.IMAGE_MEDIA_TYPE,
      content_type: types.PROJECT_CONTENT_TYPE,
      created_at: new Date(),
      updated_at: new Date()
    },
  ]);
};

/**
 * Rollback seed data
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.rollback = async function (knex) {
  await knex('content')
    .where(
      'title',
      'in',
      [
        'React/Express Boilerplate',
      ]
    ).delete();
};
