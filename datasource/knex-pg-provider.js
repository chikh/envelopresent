const knex = require('knex');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const knexConfig =
  require(path.join(__dirname, '..', 'configs', 'knexfile'))[mode];

module.exports = () => knex(knexConfig);
