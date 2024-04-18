const path = require('path');

module.exports = {
  main: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, '..', 'db', 'sqlite3.db')
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, '..', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, '..', 'seeds')
    }
  },
};