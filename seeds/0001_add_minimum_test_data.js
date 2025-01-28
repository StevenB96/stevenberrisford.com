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
          title: 'Bare Dating Mobile Application',
          description: 'A full-stack mobile dating application inspired by the television series "Naked Attraction."\n\nMy contribution was primarily technical; I focused on building the UI, adding components, styling according to the specifications, and incorporating animations. Subsequently, I worked on image modifications, API calls, and push notifications. Finally, I implemented the whole games feature.',
          order: 3
        }
      ]).returning('id');

      // Inserts seed entries for 'content'
      await knex('content').insert([
        {
          project: project[0].id,
          profile: profile[0].id,
          title: 'DatingNews Article',
          description: 'This article discusses the BARE Dating app, which was launched in 2020 to help singles find open-minded romantic partners in a safe environment. Founded by Alex Sergent, Phil Beesley, and Gillian Myhill, BARE addressed common dating challenges like safety and compatibility.\n\nThe app utilised advanced AI technology to verify profiles, ensuring a secure experience while empowering users—especially women—with control over their personal information through features like the "Reveal Feature," which allowed users to choose when to view images from matches.\n\nBARE also promoted transparency in relationship preferences, enabling users to select options such as "Something Less Serious" or "Something More Serious." As it prepared to launch in the U.S., BARE aimed to enhance its features and build a community where individuals could explore their identities and desires in an inclusive way.',
          media_id: null,
          media_link: `${process.env.IP_DOMAIN}/public/documents/Bare_Dating_Article.html`,
          media_type: types.WEB_PAGE_MEDIA_TYPE,
          type: types.PROFESSIONAL_CONTENT_TYPE,
          order: 1
        },
        {
          project: project[0].id,
          profile: profile[0].id,
          title: 'ApkPure Archive',
          description: `This page offers a comprehensive version history of the app "BARE: Dating Safely," developed by BARE Dating Group. It includes the release dates, version notes and file sizes of the various APKs. Additionally, it highlights BARE's purpose of creating a comfortable space for users, particularly women, to communicate their dating intentions and preferences while emphasising honesty, inclusiveness, and safety.`,
          media_id: null,
          media_link: `${process.env.IP_DOMAIN}/public/documents/Bare_Dating_Archive.html`,
          media_type: types.WEB_PAGE_MEDIA_TYPE,
          type: types.PROFESSIONAL_CONTENT_TYPE,
          order: 2
        },
        {
          project: project[0].id,
          profile: profile[0].id,
          title: 'Reveal Functionality',
          description: `A couple of promotional screenshots. The first shows the screen where one would match with users, including people filters and animated swipe bar. The second shows the screen which dealt with the reveal functionality, including the animated sliders used to hide portions of the image.`,
          media_id: null,
          media_link: `${process.env.IP_DOMAIN}/public/images/content/Bare_Dating_Reveal.png`,
          media_type: types.IMAGE_MEDIA_TYPE,
          type: types.PROFESSIONAL_CONTENT_TYPE,
          order: 3
        },
        {
          project: project[0].id,
          profile: profile[0].id,
          title: 'Sign Up Screens',
          description: 'A couple of promotional screenshots. The first one shows the gender identity preference screen and the second shows the location preference screen. The sign up process had seven stages making it challenging to unite all the potential user stories.',
          media_id: null,
          media_link: `${process.env.IP_DOMAIN}/public/images/content/Bare_Dating_Registration.png`,
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