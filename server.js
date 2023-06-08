// Require DOTENV and create common PORT var.
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

// Require and initalize express.
const express = require('express')
const app = express()

// Routes

    // Homepage
    app.get('/', (req, res) => {
        res.send('Welcome to an Awesome App about Breads!')
    })

    // Breads
    const breadsController = require('./controllers/breads_controller.js')
    app.use('/breads', breadsController)

// Listen
app.listen(PORT, () => {
    console.log("Listening on port ", PORT)
})

// http://localhost:3003/