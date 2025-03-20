const mongoose = require('mongoose')

const donorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    aadhaar: String,
    mobile: String,
    organ: [String],
    organization: String,
    photo: String,         // Store Photo in Buffer
    signature: String      // Store Signature in Buffer
})

const donorModel = mongoose.model('Donor', donorSchema)

module.exports = donorModel
