// Dependencies
    
    // Require DOTENV and create common PORT var.
    require('dotenv').config()
    const PORT = process.env.PORT
    console.log(PORT)

    // Require and initalize express.
    const express = require('express')
    const app = express()

    // Require method-override package.
    const methodOverride = require('method-override')

// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'))



// Routes

    // Homepage
    app.get('/', (req, res) => {
        res.send('Welcome to an Awesome App about Breads!')
    })

    // Breads
    const breadsController = require('./controllers/breads_controller.js')
    app.use('/breads', breadsController)

    // 404 Page
    app.get('*', (req, res) => {
        res.send('404')
    })

// Listen
app.listen(PORT, () => {
    console.log("Listening on port ", PORT)
})

// http://localhost:3003/