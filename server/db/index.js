'use strict'
// const chalk = require('chalk');
// const Sequelize = require('sequelize');
// const pkg = require('../../package.json');
// require('./models');

// console.log(chalk.yellow("Opening database connection"));

// // create the database instance that can be used in other database files
// module.exports = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
//   logging: false, // so we don't see all the SQL query made
// });

// console.log('!!!!!!', pkg.name)
// // don't forget to run our models files and make all associations for our Sequelize objects (if you do it here consider circular references)

const { Student, Campus } = require('./models'); // before const db
const db = require('./db');
module.exports = db;

Student.belongsTo(Campus)
// Campus.hasMany(Student) //maybe not necessary? don't see a change in the table
Campus.belongsToMany(Student, {through: 'CampusStudent'})
Campus.hasMany(Student, {as: 'Students'})