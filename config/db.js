const mongoose = require('mongoose')
const config = require('config')

// Getting MongoDB URI from config file
const mongoURI = config.get('mongoURI')

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log("MongoDB Connected")
    } catch (error) {
        console.log("MongoDB Connection Failed", error)
        process.exit(1)
    }
}

module.exports = connectDB
