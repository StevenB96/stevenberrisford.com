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
  const profile = await knex('profile').where({ full_name: 'Steven Berrisford' }).first();

  // Inserts seed entries for 'project'
  const project = await knex('project').insert([
    {
      profile: profile.id,
      title: 'Oman Foreign Ministry Mobile Application',
      description: `A full-stack mobile public information application primarily serving Omanis travelling abroad or for visitors to Oman.`,
      order: 3
    }
  ]).returning('id');

  // Inserts seed entries for 'content'
  await knex('content').insert([
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Google Play Web Page',
      description: `Placeholder.`,
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/documents/Oman_Google_Play.html`,
      media_type: types.WEB_PAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 1
    },
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Omani News Web Page',
      description: 'Placeholder.',
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/documents/Oman_Website.html`,
      media_type: types.WEB_PAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 2
    },
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Map and Registration Screens',
      description: `Placeholder.`,
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/images/content/Oman_Embassy_Registration.png`,
      media_type: types.IMAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 3
    },
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Example of In-App Translation',
      description: `Placeholder.`,
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/images/content/Oman_Translation.png`,
      media_type: types.IMAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 4
    },
  ]);
};
