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
      title: 'My Full Stack Development Portfolio 2023',
      text: null,
      link: null,
      media_link: `${process.env.SERVER_PROTOCOL}://${process.env.IP_DOMAIN}:${process.env.SERVER_PORT}/public/documents/Full_Stack_Development_Portfolio_2023.pdf`,
      media_type: types.PDF_MEDIA_TYPE,
      content_type: types.PROJECT_CONTENT_TYPE,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: 'Extract From My Masters Project Individual Report',
      text: null,
      link: null,
      media_link: `${process.env.SERVER_PROTOCOL}://${process.env.IP_DOMAIN}:${process.env.SERVER_PORT}/public/documents/Individual_Report_Extract_06_05_2019.pdf`,
      media_type: types.PDF_MEDIA_TYPE,
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
        'My Full Stack Development Portfolio 2023',
        'Extract From My Masters Project Individual Report'
      ]
    ).delete();
};
