const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

// Getting MongoDB URI from config file
const mongoURI = process.env.MONGO_URI

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
