const express = require('express')
const { donorRegister } = require('../controllers/donorController')
const { loginDonor } = require('../controllers/donorLoginController')
const  patientRegister  = require('../controllers/petientController')
const router = express.Router()
const path = require("path")
const isLoggedIn = require('../middlewares/authMiddleware'); 
const upload = require('../middlewares/uploadMiddleware'); 

router.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, '../frontend/html/register.html'))
})

router.post('/register', upload.fields([{ name: 'photo' }, { name: 'signature' }]), donorRegister)

router.get('/register/success', function(req, res) {
    res.sendFile(path.join(__dirname, '../frontend/html/success.html'))
})

router.get("/login",function(req,res) {
    res.sendFile(path.join(__dirname, '../frontend/html/login.html'))
})

router.post('/login', loginDonor)

router.get("/logout", function(req,res) {
    res.clearCookie('donorToken')
    res.redirect("/")
})

router.get("/services", isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/html/loginservices.html"));
})

router.get("/services/downloadcertificate", isLoggedIn ,function(req,res) {
    res.sendFile(path.join(__dirname, '../frontend/html/downloadcertificate.html'))
})

router.get('/services/faq', isLoggedIn ,function(req,res) {
    res.sendFile(path.join(__dirname, '../frontend/html/faq.html'))
})

router.get("/services/searchfordonor", isLoggedIn ,function(req,res) {
    res.sendFile(path.join(__dirname, '../frontend/html/loginorgansearch.html'))
})

router.post("/services/searchfordonor/loginorgansearch", upload.single('medicalReport') , patientRegister)

router.get("/services/searchfordonor/loginorganselection", isLoggedIn ,function(req,res) {
    res.sendFile(path.join(__dirname, '../frontend/html/loginorganselection.html'))
})

module.exports = router
