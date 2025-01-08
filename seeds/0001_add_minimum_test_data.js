// Media Types
const IMAGE = 1;
const PDF = 2;
const VIDEO = 3;
const WEB_PAGE = 4;

// Content Types
const PROFILE = 1;
const PROFESSIONAL = 2;
const PERSONAL = 3;
const RECREATIONAL = 4;

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
    .then(function () {
      // Inserts seed entries for 'site'
      return knex('site').insert([
        {
          banner_text: 'Welcome to My Site',
          description: 'Placeholder site description.',
          background_image_link: `${process.env.IP_DOMAIN}/public/images/site/Site_Background.jpg`,
          project_background_image_link: `${process.env.IP_DOMAIN}/public/site/content/Project_Background.jpg`,
          article_background_image_link: `${process.env.IP_DOMAIN}/public/site/content/Article_Background.jpg`,
          hobby_background_image_link: `${process.env.IP_DOMAIN}/public/site/content/Hobbies_Background.jpg`,
        }
      ]);
    })
    .then(function () {
      // Inserts seed entries for 'profile'
      return knex('profile').insert([
        {
          full_name: 'Steven Berrisford',
          personal_summary: 'Placeholder personal summary.',
          picture_link: `${process.env.IP_DOMAIN}/public/images/content/Profile_Picture.pdf`,
          job_title: 'Full Stack Developer',
          cv_link: `${process.env.IP_DOMAIN}/public/documents/CV.pdf`,
          phone_number: '+44 (0)7891078922',
          email_address: 'stevenberrisford@gmail.com',
          post_address: '80 Thetford Road\nNew Malden\nSurrey\nKT3 5DT\nLondon UK'
        }
      ]);
    })
    .then(function () {
      // Inserts seed entries for 'project'
      return knex('project').insert([
        {
          profile: 1,
          title: 'Dating Application',
          description: 'A full stack mobile dating application loosely based on the naked attraction TV series.',
          order: 1
        }
      ]);
    })
    .then(function () {
      // Inserts seed entries for 'content'
      return knex('content').insert([
        {
          project: 1,
          profile: 1,
          title: 'BARE Dating: A Transparent App That Helps Singles Find Open-Minded Romantic Partners',
          description: 'An article advertising the application and discussing the target audience, safety and transparency.',
          media_id: null,
          media_link: `${process.env.IP_DOMAIN}/public/documents/BARE_Dating_Article.html`,
          media_type: WEB_PAGE,
          type: PROFESSIONAL,
          order: 3
        },
        {
          project: 1,
          profile: 1,
          title: 'Blurring',
          description: 'A view of the picture blurring functionality.',
          media_id: null,
          media_link: `${process.env.IP_DOMAIN}/public/images/content/Bare_Dating_Blurring.png`,
          media_type: IMAGE,
          type: PROFESSIONAL,
          order: 1
        },
        {
          project: 1,
          profile: 1,
          title: 'Menus',
          description: 'A view of the menus and general presentation.',
          media_id: null,
          media_link: `${process.env.IP_DOMAIN}/public/images/content/Bare_Dating_Menus.png`,
          media_type: IMAGE,
          type: PROFESSIONAL,
          order: 2
        }
      ]);
    })
    .then(function () {
      // Inserts seed entries for 'reference'
      return knex('reference').insert([
        {
          profile: 1,
          author: 'Audrius Dobrovolskis',
          role: 'Lead Developer',
          organisation: 'Scorchsoft Ltd',
          text: 'Steven has been a part of our team for nearly three years  . . .  ' +
            'He has continuously demonstrated a strong grasp of the latest development trends and best practices in full-stack development . . . ' +
            'Apart from his technical abilities, Steven is an excellent team player with strong communication skills.',
          order: 2
        }
      ]);
    });
};