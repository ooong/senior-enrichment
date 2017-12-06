const studentRouter = require('express').Router()
const { Student, Campus } = require('../db/models')


module.exports = studentRouter


// GET api/students
studentRouter.get('/', function (req, res, next) {
    Student.findAll()
    .then(students => res.json(students))
})


// GET api/students/:id
studentRouter.get('/:id', function (req, res, next) {
    Student.findOne({where: {id: req.params.id}})
    .then(student => res.json(student.name))
    // res.send("student test!");
})

// POST api/students/
studentRouter.post('/', function (req, res, next) {
    Student.create(req.body)
    .then(function(createdStudent) {
        res.json({
            message: 'woohoo!',
            student: createdStudent
        })
    })
})

// PUT api/students/:id
studentRouter.put('/:id', function (req, res, next) {
    Student.update(req.body, {where: {id: req.params.id}, returning: true})
    .then(function (updatedStudent) {
        res.json(updatedStudent[1])
    })
})

// DELETE api/students/:id
studentRouter.delete('/:id', function (req, res, next) {
    Student.destroy({where: {id: req.params.id}})
    res.send('student deleted!');
})