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
      title: 'Medical Application',
      description: 'Placeholder.',
      order: 1
    }
  ]).returning('id');

  // Inserts seed entries for 'content'
  await knex('content').insert([
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Article',
      description: 'Placeholder.',
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/documents/2PD_Article.html`,
      media_type: types.WEB_PAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 1
    },
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Device',
      description: 'Placeholder.',
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/images/content/2PD_Device.png`,
      media_type: types.IMAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 2
    },
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Mobile Application',
      description: `Placeholder.`,
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/images/content/2PD_Mobile_App.png`,
      media_type: types.IMAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 3
    },
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Web Application',
      description: 'Placeholder.',
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/images/content/2PD_Web_App.png`,
      media_type: types.IMAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 4
    }
  ]);
};
