import express from 'express'
import './database'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import path from 'path'

import { routes } from './routes'

const app = express()

// Public directory files accessed by browser
app.use(express.static(path.join(__dirname, '..', 'public')))

// My view's
app.set('views', path.join(__dirname, '..', 'public'))

// Set engine (default ejs 😢)
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/pages/client', (request, response) => {
    return response.render('html/client.html')
})

const http = createServer(app) // Creating HTTP protocol
const io = new Server(http)    // Creating WS protocol

io.on('connection', (socket: Socket) => {
})

app.use(express.json())
app.use(routes)

export { http, io }
