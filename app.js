const express = require("express")
const path = require("path")
const connectDB = require("./config/db")
require('dotenv').config()

const app = express()

connectDB()

app.get("/",function(req,res) {
    res.send("index")
})

app.listen(5000,function(req,res) {
    console.log("server is running")
})