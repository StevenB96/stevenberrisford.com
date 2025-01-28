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
      title: '2PD Web and Mobile Application',
      description: 'A full-stack application aiming to treat phantom limb pain with electric stimulation.\n\nI was the primary developer for a new development phase. I adapted to new technologies such as Bluetooth, learned to work with Java, and adjusted to new internal processes. Additionally, the opportunity to deploy the full-stack application on AWS EC2 expanded my knowledge of Cloud deployment.',
      order: 2
    }
  ]).returning('id');

  // Inserts seed entries for 'content'
  await knex('content').insert([
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Teesside University Article',
      description: `This article reported that Teesside University researchers developed a new medical device aimed at treating phantom limb pain, a condition that affects many amputees by causing sensations that seem to come from the missing limb. The device, created in collaboration with healthcare innovation company 2PD, underwent clinical trials to evaluate its effectiveness. It worked by stimulating different parts of the body to help the brain rewire its mental map of the amputated limb, which may have reduced pain.\n\nDoctoral student Sarah Oatway conducted the research as part of her PhD through a prestigious fellowship. Both Oatway and 2PD's CEO, Jason Timms, expressed optimism about the potential impact of the device on improving the quality of life for amputees. The project was part of broader efforts at the university to address persistent pain management.`,
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/documents/2PD_Article.html`,
      media_type: types.WEB_PAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 1
    },
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Electical Stimulation Device',
      description: 'A photo of one of our developers testing the device during the transition process as we took over its development. Notably, on their shin lies the eight electrodes used for stimulation.',
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/images/content/2PD_Device.png`,
      media_type: types.IMAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 2
    },
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Mobile Application for Managing the Device',
      description: `An image showing the graphical representation of the electrodes with which the patient would interact. At the top, it shows the training and assessment modes while below it shows the level progression system. The objective for the patient was to identify the position and type of stimulation burst within a set time period.`,
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/images/content/2PD_Mobile_App.png`,
      media_type: types.IMAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 3
    },
    {
      project: project[0].id,
      profile: profile.id,
      title: 'Web Application for Patient Monitoring',
      description: 'A screenshot of the application used by clinicians to track the progress of their patients. In addtion to being able to access records, clinicians had access to automated alerts and multiple graphs, presenting them with useful patient information to improve their analysis.',
      media_id: null,
      media_link: `${process.env.IP_DOMAIN}/public/images/content/2PD_Web_App.png`,
      media_type: types.IMAGE_MEDIA_TYPE,
      type: types.PROFESSIONAL_CONTENT_TYPE,
      order: 4
    }
  ]);
};
