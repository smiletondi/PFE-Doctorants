const Sequelize= require('Sequelize');
const sequelize= require('../util/database');

const Encadrant= sequelize.define('encadrant', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nom: Sequelize.STRING,
    prenom: Sequelize.STRING,
    profil: Sequelize.STRING,
    cin: Sequelize.STRING,
    dateNaiss: Sequelize.DATE,
    lieuNaiss: Sequelize.STRING,
    specialite:Sequelize.STRING,
    tel: Sequelize.INTEGER,
    email: Sequelize.STRING
})

module.exports=Encadrant;