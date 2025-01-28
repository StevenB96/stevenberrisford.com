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
      description: `A full-stack mobile public information application primarily serving Omanis travelling abroad or for visitors to Oman.\n\nAs the primary developer from inception, I developed the MVP. I was challenged with working with a new junior developer and a junior project assistant. I mentored both, assigned tasks, provided guidance, and clarified requirements. The project required me to perform ETL operations on data from an external API and integrate geolocation services. The app is available on major platforms.`,
      order: 1
    }
  ]).returning('id');

  // Inserts seed entries for 'content'
  await knex('content').insert([
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Google Play Web Page',
      description: `This page provides an overview of the Oman Foreign Ministry app, designed to assist Omanis traveling abroad and visitors to Oman. The app has been downloaded over 10000 times and offers essential services such as locating the nearest Omani Embassy, registering with local embassies for safety updates, and providing key contact information.\n\nIt is available in both Arabic and English and includes features like travel alerts and access to the Foreign Ministry's website and eServices Portal, which is still in development. The app prioritises data safety, stating that it does not share data with third parties and that collected data is encrypted in transit.`,
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/documents/Oman_Google_Play.html`,
      media_type: types.WEB_PAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 1
    },
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Omani API Web Page',
      description: 'This page provides an API which enables organisations to retrieve information from the source. The full-stack application includes an ETL pipeline for updating the backend database with the latest information.',
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/documents/Oman_API.html`,
      media_type: types.WEB_PAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 2
    },
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Map and Travel Advice Screens',
      description: `An image showcasing two key screens: the Map screen and the Travel Advice screen. The Map screen enables users to locate nearby Embassies and Consulates, as well as providing options to contact or register with these entities directly. Meanwhile, the Travel Advice screen serves as a dedicated resource that offers continuous access to the latest travel information and updates, helping users stay informed about current conditions and advisories.`,
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/images/content/Oman_Map_Advice.png`,
      media_type: types.IMAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 3
    },
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Example of In-App Translation',
      description: `An image showing the News screen, which displays alternate translations of a news article. The first translation is presented in English, while the second is provided in Arabic. The specific language shown to the user is determined by the language preference selected in the settings screen.`,
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/images/content/Oman_Translation.png`,
      media_type: types.IMAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 4
    },
  ]);
};
