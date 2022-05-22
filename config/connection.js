const { Sequelize } = require('sequelize');

let sequelize;

require('dotenv').config();

// Look for Heroku's JAWSDB_URL env variable; otherwise use local
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
};

module.exports = sequelize;