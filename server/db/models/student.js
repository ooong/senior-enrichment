const Sequelize = require('sequelize');
const db = require('../db');


const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }   
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }    
    },
    gpa: {
        type: Sequelize.FLOAT, //check this syntax
        validate: { min: 0, max: 4 }
    },
    name: {
        type: Sequelize.VIRTUAL,
        get () {
            return this.firstName + ' ' + this.lastName
        }
    }
})




module.exports = Student;