const mysql = require('mysql');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
server.listen(6000);

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "Realtime"
});

io.on('connection', (socket) => {
    console.log('User Conncetion');
    socket.on('connect user', (user) => {
        console.log(user);
        // socket.broadcast.emit('connect user', listUser);
        io.emit('connect user', user);
        });
    socket.on('on typing', (typing) => {
            console.log("Typing.... ");
            io.emit('on typing', typing);
        });
    socket.on('chat message', (msg) => {
            console.log("Message " + msg['message']);
            io.emit('chat message', msg);
        });
    socket.on("image", (info) => {
            // console.log("Image " + info['image']);
            console.log("Image " + info);
            io.emit('img', info);
    });
    socket.on("audio", (ad) => {
        console.log("Audio " + ad['audio']);
        io.emit('audio', ad);
    });
});