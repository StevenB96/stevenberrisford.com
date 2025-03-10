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
  // Deletes all existing entries
  return knex('content')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('content').insert(
        [
          {
            title: 'Dating App (production)',
            text: 'I was a junior working on this dating app, built using React Native (mobile framework) and Yii2 (backend framework). It was packed with features e.g. verification, animations, tutorials, user locations, "Bare Games".',
            link: null,
            media_link: `${process.env.IP_DOMAIN}/public/images/content/bare_dating.png`,
            media_type: types.IMAGE_MEDIA_TYPE,
            content_type: types.PROJECT_CONTENT_TYPE,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            title: 'Public Information App (production)',
            text: 'I took a leading role developing this app, built React Native (mobile framework) and Laravel (backend framework). It provided Omani news, delievered notificaitons, and displayed embassy locations.',
            link: null,
            media_link: `${process.env.IP_DOMAIN}/public/images/content/oman_fm.png`,
            media_type: types.IMAGE_MEDIA_TYPE,
            content_type: types.PROJECT_CONTENT_TYPE,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            title: 'Movie Predictor (prototype)',
            text: 'A Python web/ETL application deployed with Docker on AWS Infrastructure (ECS, Lambda, S3, CodePipeline). Built on Flask (web framework), Scikit Learn (ML library) and Matplotlib (graphing tool).',
            link: null,
            media_link: `${process.env.IP_DOMAIN}/public/images/content/movie_predictor.jpg`,
            media_type: types.IMAGE_MEDIA_TYPE,
            content_type: types.PROJECT_CONTENT_TYPE,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            title: 'Diagram Optimiser (prototype)',
            text: 'A React (JavaScript web framework) diagram builder/optimiser. The focus is the custom ML optimisation algorithm. The project is also a demonstration of animation and state management.',
            link: null,
            media_link: `${process.env.IP_DOMAIN}/public/images/content/diagram_optimiser.png`,
            media_type: types.IMAGE_MEDIA_TYPE,
            content_type: types.PROJECT_CONTENT_TYPE,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            title: 'Web Library (prototype)',
            text: 'A scalable, comprehensively unit tested, MVC application built using Django (Python web framework). It is deployed on a Kubernetes cluster (DevOps tool), integrating with database microservices.',
            link: null,
            media_link: `${process.env.IP_DOMAIN}/public/images/content/web_library.jpg`,
            media_type: types.IMAGE_MEDIA_TYPE,
            content_type: types.PROJECT_CONTENT_TYPE,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            title: 'Terraform Visualiser (prototype)',
            text: 'A containerised full stack application built using Express and React (JavaScript web frameworks). It queries a Kubernetes API to visualise Clusters that have been deployed on AWS using Terraform.',
            link: null,
            media_link: `${process.env.IP_DOMAIN}/public/images/content/terraform_visualiser.jpg`,
            media_type: types.IMAGE_MEDIA_TYPE,
            content_type: types.PROJECT_CONTENT_TYPE,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            title: 'Shared Whiteboard (prototype)',
            text: 'A full stack application built using Express and React (JavaScript web frameworks). It implements Socket.IO (TCP sockets) and Konva (draw package) to stream line strokes between connected clients.',
            link: null,
            media_link: `${process.env.IP_DOMAIN}/public/images/content/shared_whiteboard.jpg`,
            media_type: types.IMAGE_MEDIA_TYPE,
            content_type: types.PROJECT_CONTENT_TYPE,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            title: 'Choir',
            text: 'I have been a member of "Westend Musical Choir" since September 14th 2021. It is a great choir with some lovely member and we sing really fun songs. Before, I did not particularly like musicals, now I am hooked.',
            link: null,
            media_link: 'X9Uk5ypMZE0',
            media_type: types.VIDEO_MEDIA_TYPE,
            content_type: types.HOBBY_CONTENT_TYPE,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            title: 'Dance',
            text: 'My first dance lesson was on October 20th 2021. I took individual Salsa classes for 1 year which built my confidence. Simultaneously I took group classes, first Salsa and then later Swing classes.',
            link: null,
            media_link: 'QRKn12fLLaE',
            media_type: types.VIDEO_MEDIA_TYPE,
            content_type: types.HOBBY_CONTENT_TYPE,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            title: 'Piano',
            text: 'I started taking Piano lessons on November 25th 2022. My objective was to learn enough to play some musical numbers. There was a mix between theory and learning by heart. In the end, I learned two musical tunes.',
            link: null,
            media_link: 'MI52fQ2dcq4',
            media_type: types.VIDEO_MEDIA_TYPE,
            content_type: types.HOBBY_CONTENT_TYPE,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            title: 'Robot Combat',
            text: 'My first real venture into the world of Robot Combat was May 23rd 2012. I learned to build 150g remote controlled fighting robots. Over the years, I have built a number of robots, and competed a few national competitions.',
            link: null,
            media_link: 'vuldVsNwbfE',
            media_type: types.VIDEO_MEDIA_TYPE,
            content_type: types.HOBBY_CONTENT_TYPE,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            title: 'Decision Tree Guide',
            text: null,
            link: null,
            media_link: `${process.env.IP_DOMAIN}/public/documents/Decision_Trees.pdf`,
            media_type: types.PDF_MEDIA_TYPE,
            content_type: types.PROJECT_CONTENT_TYPE,
            created_at: new Date(),
            updated_at: new Date()
          },

          {
            title: '2PD Article',
            text: null,
            link: null,
            media_link: `${process.env.IP_DOMAIN}/public/documents/2PD_Article.html`,
            media_type: types.WEB_PAGE_MEDIA_TYPE,
            content_type: types.PROJECT_CONTENT_TYPE,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            title: 'BARE Dating Article',
            text: null,
            link: null,
            media_link: `${process.env.IP_DOMAIN}/public/documents/BARE_Dating_Article.html`,
            media_type: types.WEB_PAGE_MEDIA_TYPE,
            content_type: types.PROJECT_CONTENT_TYPE,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            title: 'Foreign Ministry of Oman Google Play',
            text: null,
            link: null,
            media_link: `${process.env.IP_DOMAIN}/public/documents/Foreign_Ministry_of_Oman_Google_Play.html`,
            media_type: types.WEB_PAGE_MEDIA_TYPE,
            content_type: types.PROJECT_CONTENT_TYPE,
            created_at: new Date(),
            updated_at: new Date()
          },
        ]
      );
    });
};

/**
 * Rollback seed data
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.rollback = async function(knex) {
  await knex('content').truncate();
};
