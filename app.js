const express = require ('express')
const path = require('path')

const app = express()

app.use('/', express.static(path.join(__dirname, 'client/build')))

app.get("/api/name", (req, res) => {
    res.json( {name:'andy'} )
})

app.listen(5001)