const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const EmployeeRoute = require('./routes/Employee')
mongoose.connect('mongodb://localhost:27017/emp', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database connection is established!')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const PORT = process.env.PORT || 12000

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}')
    console.log(PORT)
})

app.use('/api/employee', EmployeeRoute)
    //app.use('/api/employee', require('./api/employee'))
    //app.use('/api/things', require('./api/things'));