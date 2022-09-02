const express = require('express')
const app = express()
const connectDB = require('./configuration/db.js')
const port= process.env.PORT  || 5000
const dotenv = require('dotenv')
const userRoutes = require('./routes/user.js');

dotenv.config()
connectDB()


app.listen(port, ()=> console.log(`Server started on port: ${port}`))
app.use("/api/v1/users", userRoutes);


app.get('/api', (req, res) => {
    res.json({
        message:'Welcome to the api'
    })
})