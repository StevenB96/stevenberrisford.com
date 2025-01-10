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
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('site').truncate(),
    knex('profile').truncate(),
    knex('project').truncate(),
    knex('content').truncate(),
    knex('reference').truncate(),
  ])
    .then(async function () {
      // Inserts seed entries for 'site'
      const site = await knex('site').insert([
        {
          banner_text: 'Welcome to My Site',
          description: 'Placeholder site description.',
          background_image_link: `${process.env.IP_DOMAIN}/public/images/site/Site_Background.jpg`,
          project_background_image_link: `${process.env.IP_DOMAIN}/public/images/site/Project_Background.jpg`,
          article_background_image_link: `${process.env.IP_DOMAIN}/public/images/site/Article_Background.jpg`,
          hobby_background_image_link: `${process.env.IP_DOMAIN}/public/images/site/Hobbies_Background.jpg`,
        }
      ]).returning('id');

      // Inserts seed entries for 'profile'
      const profile = await knex('profile').insert([
        {
          full_name: 'Steven Berrisford',
          personal_summary: 'I am a highly motivated and diligent software developer, eager to contribute my skills to a Mid-Level software development position or a comparable role.'
            +
            'With 3 years of solid experience, I have the expertise to quickly make a positive impact.\n\nHere is a short summary:'
            +
            '\n • 3 years full stack experience as a: React developer, React Native developer, and Laravel developer.'
            +
            '\n • 2+ years experience as a: Python developer, Node developer including: Django framework, Express framework.'
            +
            '\n • Excellent skills in Amazon Web Services, Docker Containers, Kubernetes, and Terraform Infrastructure as Code.'
            +
            '\n • Ability to mentor juniors and present latest developments and trends in Software Development and DevOps.'
            +
            '\n • Track record of building connections with internal stakeholders and fostering a collaborative environment.',
          picture_link: `${process.env.IP_DOMAIN}/public/images/content/Profile_Picture.jpg`,
          job_title: 'Full Stack Developer',
          cv_link: `${process.env.IP_DOMAIN}/public/documents/CV.pdf`,
          phone_number: '+44 (0)7891078922',
          email_address: 'stevenberrisford@gmail.com',
          post_address: '80 Thetford Road\nNew Malden\nSurrey\nKT3 5DT\nLondon UK'
        }
      ]).returning('id');

      // Inserts seed entries for 'project'
      const project = await knex('project').insert([
        {
          profile: profile[0].id,
          title: 'Dating Application',
          description: 'A full stack mobile dating application loosely based on the naked attraction TV series.',
          order: 1
        }
      ]).returning('id');

      // Inserts seed entries for 'content'
      await knex('content').insert([
        {
          project: project[0].id,
          profile: profile[0].id,
          title: 'Article',
          description: 'An article reviewing the application and discussing the target audience, safety and transparency.',
          media_id: null,
          media_link: `${process.env.IP_DOMAIN}/public/documents/BARE_Dating_Article.html`,
          media_type: types.WEB_PAGE_MEDIA_TYPE,
          type: types.PROFESSIONAL_CONTENT_TYPE,
          order: 1
        },
        {
          project: project[0].id,
          profile: profile[0].id,
          title: 'Archive',
          description: 'A page providing information about the application, including images and APKs (inaccessible).',
          media_id: null,
          media_link: `${process.env.IP_DOMAIN}/public/documents/BARE_Dating_Archive.html`,
          media_type: types.WEB_PAGE_MEDIA_TYPE,
          type: types.PROFESSIONAL_CONTENT_TYPE,
          order: 2
        },
        {
          project: project[0].id,
          profile: profile[0].id,
          title: 'Advert',
          description: `A picture of the functionality used to promote the application's features.`,
          media_id: null,
          media_link: `${process.env.IP_DOMAIN}/public/images/content/Bare_Dating_Advert.jpg`,
          media_type: types.IMAGE_MEDIA_TYPE,
          type: types.PROFESSIONAL_CONTENT_TYPE,
          order: 3
        },
        {
          project: project[0].id,
          profile: profile[0].id,
          title: 'Chat and Settings',
          description: 'An in-app picture of the chat history and the settings page.',
          media_id: null,
          media_link: `${process.env.IP_DOMAIN}/public/images/content/Bare_Dating_Chat_and_Settings.png`,
          media_type: types.IMAGE_MEDIA_TYPE,
          type: types.PROFESSIONAL_CONTENT_TYPE,
          order: 4
        }
      ]);

      // Inserts seed entries for 'reference'
      await knex('reference').insert([
        {
          profile: profile[0].id,
          author: 'Audrius Dobrovolskis',
          role: 'Lead Developer',
          organisation: 'Scorchsoft Ltd',
          text: 'Steven has been a part of our team for nearly three years... He has continuously demonstrated a strong grasp of the latest development trends and best practices in full-stack development... Apart from his technical abilities, Steven is an excellent team player with strong communication skills.',
          order: 2
        }
      ]);
    });
};