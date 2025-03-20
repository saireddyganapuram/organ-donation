const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    aadhaar: String,
    mobile: String,
    medicalReport : String,  
})

const patientModel = mongoose.model('Patient', patientSchema)

module.exports = patientModel
