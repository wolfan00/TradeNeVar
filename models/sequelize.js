import Sequelize from 'sequelize';

const sequelize = new Sequelize('nevarmarket', 'root', 'Burhan1453*', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log, 
}); 
export default sequelize; 