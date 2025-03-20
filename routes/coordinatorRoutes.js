const express = require("express")
const router = express.Router()
const path = require('path')
const cologin = require('../controllers/coordinatorLoginController')
const coregister = require('../controllers/coordinatorConroller')
const upload = require('../middlewares/uploadMiddleware')
const coorganregister = require('../controllers/coorganregisterController')    


router.post('/register', coregister)

router.get('/login', function(req,res) {
    res.sendFile(path.join(__dirname, "../frontend/html/coordinatorlogin.html"))
})

router.post('/login', cologin)

router.get('/services', function(req,res) {
    res.sendFile(path.join(__dirname, '../frontend/html/coordinatorpage.html'))
})

router.get('/services/organsearch', function(req,res) {
    res.sendFile(path.join(__dirname, '../frontend/html/organsearch.html'))
})

router.post('/services/organsearch', upload.single('medicalReport'), coorganregister)

router.get('/services/organsearch/organselection', function(req,res) {
    res.sendFile(path.join(__dirname, '../frontend/html/organselection.html'))
})

router.get('/services/organsearch/organselection/success', function(req,res) {
    res.sendFile(path.join(__dirname, '../frontend/html/request_success.html'))
})





module.exports = router