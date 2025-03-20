const patientModel = require('../models/patientModel')
const path = require('path')

const coorganregister = async (req,res) => {
    
    let {name,age,gender,aadhar,mobile} = req.body

    const medicalReportBuffer = req.file.buffer.toString('base64')

    const newPatient = new patientModel({
        name,
        age,
        gender,
        aadhar,  
        mobile,
        medicalReport : medicalReportBuffer
    })

    await newPatient.save()
    res.redirect('/coordinators/services/organsearch/organselection')
}

module.exports = coorganregister