const path = require('path');

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/envelopresent',
    migrations: {
      directory: path.join(__dirname, '..', 'datasource', 'migrations'),
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, '..', 'datasource','migrations'),
      tableName: 'knex_migrations'
    }
  }

};
