const Sequelize = require('sequelize');
// const Sequelize = require('sequelize-mock')
const sequelize = require('../util/database');

const Doctorant = sequelize.define('doctorant', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nom: {
        type: Sequelize.STRING,
        defaultValue: 'Mehdi'
    },
    prenom: {
        type: Sequelize.STRING,
        defaultValue: "Samba"
    },
    profil: {
        type: Sequelize.STRING,
        defaultValue: "https://picsum.photos/200"
    },
    sexe: {
        type: Sequelize.STRING,
        defaultValue: "Masculin"
    },
    cin: {
        type: Sequelize.STRING,
        defaultValue: "jk7493643"
    },
    cne: {
        type: Sequelize.STRING,
        defaultValue: "19-19891092"
    },
    dateNaiss: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    lieuNaiss: {
        type: Sequelize.STRING,
        defaultValue: "Agadir"
    },
    nationalite: {
        type: Sequelize.STRING,
        defaultValue: "Africain"
    },
    situationFam: {
        type: Sequelize.STRING,
        defaultValue: "Celibataire"
    },
    adresse: {
        type: Sequelize.STRING,
        defaultValue: "Agadir"
    },
    specialite: {
        type: Sequelize.STRING,
        defaultValue: "blabla"
    },
    tel: {
        type: Sequelize.INTEGER,
        defaultValue: 0666666666
    },
    email: {
        type: Sequelize.STRING,
        defaultValue: 'email@email.com'
    },
    bourse: {
        type: Sequelize.STRING,
        defaultValue: false
    },
    dernierDiplome: {
        type: Sequelize.STRING,
        defaultValue: "Master"
    },
    anneeDiplome: {
        type: Sequelize.INTEGER,
        defaultValue: 2014
    }
})

module.exports = Doctorant;