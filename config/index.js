const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
// This will only run in production
// this environmental variable only exists in production
if (process.env.JAWSDB_URL) {
    // Variable only exists in Heroku
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // Connect to database locally if not in production/Heroku
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelize;
