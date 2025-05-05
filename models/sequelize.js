import Sequelize from 'sequelize';

const sequelize = new Sequelize('nevarmarket', 'root', 'Burhan1453*', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
}); 
export default sequelize; // <-- module.exports değil artık
