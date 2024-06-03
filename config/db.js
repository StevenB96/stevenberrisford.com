const knex = require('knex');

knex.cache(false);

const knexConfig = require('./knexfile');

const environment = 'main';

module.exports = knex(knexConfig[environment]);