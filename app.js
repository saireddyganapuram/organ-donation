const express = require("express")
const path = require("path")
const cookieParser = require('cookie-parser')
const connectDB = require("./config/db")
require('dotenv').config()
const donorRoutes =  require('./routes/donorRoutes')
const coordinatorRoutes = require('./routes/coordinatorRoutes')

const app = express()

connectDB() 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'frontend')))
app.use(cookieParser())
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })


app.use("/donors", donorRoutes)
app.use("/coordinators", coordinatorRoutes)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/html/index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/html/learn.html'))
})

app.listen(5000,function(req,res) {
    console.log("server is running")
})