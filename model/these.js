const Sequelise= require('sequelize');
const sequelize= require('../util/database');

const These= sequelize.define('these',{
    id: {
        type: Sequelise.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    intitule: Sequelise.STRING
});

module.exports= These;