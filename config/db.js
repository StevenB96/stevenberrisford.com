const knex = require('knex');
const knexConfig = require('./knexfile');

const environment = process.env.NODE_ENV || 'main';

module.exports = knex(knexConfig[environment]);