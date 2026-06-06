const donorModel = require('../models/donorModel')
const jwt = require("jsonwebtoken")
const path = require("path")
const JWT_SECRET = process.env.JWT_SECRET


const loginDonor = async (req, res) => {
    const { aadhaar, mobile } = req.body

    const donor = await donorModel.findOne({ aadhaar})

    if (!donor) {
        return res.send("Aadhaar or Mobile Number Not Registered")
    } else {
        const token = jwt.sign({ donorId: donor._id }, JWT_SECRET , { expiresIn: '1h' })

        res.cookie('donorToken', token, {
            httpOnly: true,
            maxAge: 3600000
        })
        res.redirect("/donors/services")
    }

}

module.exports = { loginDonor }
