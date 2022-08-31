const express = require('express')
const app = express()
const connectDB = require('./configuration/db.js')
const port= process.env.PORT  || 5000
const dotenv = require('dotenv')

dotenv.config()
connectDB()


app.listen(port, ()=> console.log(`Server started on port: ${port}`))
