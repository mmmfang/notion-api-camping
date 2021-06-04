const getTents = require('./services/notion')

//set up a simple express server, define a port OR port 3000
const express = require('express')
const PORT = process.env.PORT || 3000

//initialize server
const app = express()

app.listen(PORT, console.log(`server started on port ${PORT}`)