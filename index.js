const express = require('express')
const db = require('./config/db')
const consign = require('consign')
const app = express()
consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routs.js')
    .into(app)
app.db = db
app.listen(3000, () => {
    console.log('deu M mano ')
})