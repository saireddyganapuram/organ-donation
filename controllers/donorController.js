const donorModel = require('../models/donorModel')
const path = require('path')

const donorRegister = async (req, res) => {
    const { name, age, gender, aadhaar, mobile, organ, organization } = req.body

    const photoBuffer = req.files['photo'][0].buffer.toString('base64')
    const signatureBuffer = req.files['signature'][0].buffer.toString('base64')

    const organArray = Array.isArray(req.body.organ) ? req.body.organ : [req.body.organ]

    const newDonor = new donorModel({
        name,
        age,
        gender,
        aadhaar,
        mobile,
        organ: organArray,
        organization,
        photo: photoBuffer,
        signature: signatureBuffer
    })

    await newDonor.save()
    res.redirect('/donors/register/success')
}

module.exports = { donorRegister }
