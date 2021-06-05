const getTents = require('./services/notion.js')
//set up a simple express server, define a port OR port 3000
const express = require('express')
const PORT = process.env.PORT || 3000



//initialize server
const app = express()

app.get('/tents', async (req, res) => {
    const tents = await getTents();
    res.json(tents);
})
//now we can go to localhost:3000/tents and see the tent object we want

app.listen(PORT, console.log(`server started on port ${PORT}`))
