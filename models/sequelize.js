const { Sequelize} = require('sequelize');

const sequelize = new Sequelize('nevarmarket', 'root', 'Burhan1453*', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
}); 
module.exports = sequelize;
