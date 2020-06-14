const express = require('express');
const socketio = require('socket.io')
const http = require('http');

const { addUser , removeUser , getUser , getUsersInRoom}  = require('./src/users.js');

const PORT = process.env.port || 5000

const router = require('./src/router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('we have a new collection');

    socket.on('join', ({name, room }, callback) => {
        console.log(name , room);

        // const error = true;
        // if(error){
        //     callback({error: 'error'})
        // }

        callback();
    })

    socket.on('disconnect', () => {
        console.log('User had left');
    })

})

app.use(router);

server.listen(PORT , () => console.log(`Server has started on port ${PORT}`));