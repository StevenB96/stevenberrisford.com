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
  return knex('profile')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('profile').insert([
        {
          name: 'Steven Berrisford',
          job_title: 'Full-Stack Developer/DevOps Engineer',
          description: 'I am a highly motivated and diligent software developer, eager to contribute my skills to a Mid-Level software development position or a comparable role. With 3 years of solid experience, I have the expertise to quickly make a positive impact.\n\nHere is a short summary:\n • 3 years full stack experience as a: React developer, React Native developer, and Laravel developer.\n • 2+ years experience as a: Python developer, Node developer including: Django framework, Express framework.\n • Excellent skills in Amazon Web Services, Docker Containers, Kubernetes, and Terraform Infrastructure as Code.\n • Ability to mentor juniors and present latest developments and trends in Software Development and DevOps.\n • Track record of building connections with internal stakeholders and fostering a collaborative environment.',
          phone: '(+44)7891078922',
          email: 'stevenberrisford@gmail.com',
          address: '80 Thetford Road\nNew Malden\nSurrey\nKT3 5DT\nLondon UK',
          profile_picture_link: `${process.env.SERVER_URL || "http://localhost:3000"}/public/images/profile_picture.jpg`,
          background_image_link: `${process.env.SERVER_URL || "http://localhost:3000"}/public/images/background_image.jpg`,
          cv_link: `${SERVER_URL}/public/documents/cv.pdf`,
          created_at: new Date(),
          updated_at: new Date()
        },
      ]
      );
    });
};
