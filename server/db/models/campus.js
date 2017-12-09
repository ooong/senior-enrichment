const Sequelize = require('sequelize');
const db = require('../db');


const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },
    imgUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://img00.deviantart.net/93c3/i/2009/279/0/a/school_bg_classroom_6_by_taskedangelstock.jpg'
    },
    description: {
        type: Sequelize.TEXT
    }

})


module.exports = Campus;

