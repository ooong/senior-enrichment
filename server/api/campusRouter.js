const campusRouter = require('express').Router()
const { Campus, Student } = require('../db/models')


module.exports = campusRouter


// GET api/campuses
campusRouter.get('/', function (req, res, next) {
    Campus.findAll()
    .then(campuses => res.json(campuses))
})

// // GET api/campuses/:id
// campusRouter.get('/:id', function (req, res, next) {
//     Campus.findOne({where: {id: req.params.id}})
//     .then(campus => res.json(campus))
// })


// GET api/campuses/:id all students for a campus
// campusRouter.get('/:id', function (req, res, next) {
//     Campus.findOne({where: {id: req.params.id}})
//     .then(campus => {
//         return Promise.all(campus.getStudents())
//     })
//     .then(students => {
//         console.log(students)
//     })
// })

// GET api/campuses/:id all students for a campus
campusRouter.get('/:id', function (req, res, next) {
    Campus.findOne({where: {id: req.params.id}})
    .then(campus => {
        res.json(campus)
    })
    
})








// POST api/campuses/
campusRouter.post('/', function (req, res, next) {
    Campus.create(req.body)
    .then(function(createdCampus) {
        res.json({
            message: 'woohoo!',
            student: createdCampus
        })
    })
})

// PUT api/campuses/:id
campusRouter.put('/:id', function (req, res, next) {
    Campus.update(req.body, {where: {id: req.params.id}, returning: true})
    .then(function (updatedCampus) {
        res.json(updatedCampus[1])
    })
})

campusRouter.delete('/:id', function (req, res, next) {
    Campus.destroy({where: {id: req.params.id}})
    res.send('campus deleted!');
})