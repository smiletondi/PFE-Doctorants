const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Secretary= sequelize.define('secretary', {
    id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    username: Sequelize.STRING,
    pass: Sequelize.STRING
});

module.exports = Secretary;