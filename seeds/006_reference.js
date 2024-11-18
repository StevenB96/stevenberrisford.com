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
  return knex('reference')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('reference').insert(
        [
          {
            author: 'Andrew Ward',
            role: 'CEO',
            organisation: 'Scorchsoft Ltd',
            text: 'Steven was employed at Scorchsoft from September 28th 2020, until August 2023  . . .  ' +
              'He worked on several successful web and mobile application projects, using various front-end and back-end technologies, such as React, React Native and Laravel. ' +
              'Several of these projects were technically complex, including complex algorithms and database structures.',
            order: 1,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            author: 'Audrius Dobrovolskis',
            role: 'Lead Developer',
            organisation: 'Scorchsoft Ltd',
            text: 'Steven has been a part of our team for nearly three years  . . .  ' +
              'He has continuously demonstrated a strong grasp of the latest development trends and best practices in full-stack development . . . ' +
              'Apart from his technical abilities, Steven is an excellent team player with strong communication skills.',
            order: 2,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            author: 'Eleni Komninou',
            role: 'Project Team',
            organisation: 'Scorchsoft Ltd',
            text: 'I worked with Steven Berrisford at Scorchsoft Ltd., and we collaborated for over a year across several projects . . . ' +
              'He helped challenge the team, to improve upon existing requirements without changing the core functionality, and does not hesitate to delve into the details and suggest creative solutions to complex problems.',
            order: 3,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            author: 'Jordan Smith',
            role: 'Mid-Level Developer',
            organisation: 'Scorchsoft Ltd',
            text: 'I have worked with Steven for the past two and a half years . . . ' +
              'He is very detail oriented, logical and quality focused, looking for the best way and practice to build the software at hand. ' +
              'Steven is also very easy to get along with and a great presence to have around.',
            order: 4,
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
exports.rollback = async function (knex) {
  await knex('reference').truncate();
};