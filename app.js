const express = require('express')
const server = require('node:http').createServer()
const app = express()

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

server.on('request', app)

server.listen(3000, () => {console.log('Listening on 3000')})

