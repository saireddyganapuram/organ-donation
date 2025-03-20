const mongoose = require('mongoose')

const coordinatorSchema = new mongoose.Schema({
    coordinatorId : String,
    password : String
})

const coordinatorModel = mongoose.model('Coordinator', coordinatorSchema)

module.exports = coordinatorModel
