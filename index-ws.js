const express = require('express')
const server = require('node:http').createServer()
const app = express()

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

server.on('request', app)
server.listen(3000, () => {console.log('Listening on 3000')})

/** Begin websocket */
const WebSocketServer = require('ws').Server

const wss = new WebSocketServer({server})

wss.on('connection', (ws) => {
    const numClients = wss.clients.size
    console.log('clients connected: ', numClients)

    wss.broadcast(`Current visitors: ${numClients}`)

    if(ws.readyState === ws.OPEN) {
        ws.send('Welcome to my server')
    }

    ws.on('close', () => {
        console.log('A client has disconnected')
    })
})

wss.broadcast = (data) => {
    wss.clients.forEach((client) => {
        client.send(data)
    })
}