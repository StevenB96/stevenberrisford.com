const knex = require('knex');
const knexConfig = require('./knexfile');

const environment = 'main';

module.exports = knex(knexConfig[environment]);