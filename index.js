var express = require('express');
var socket = require('socket.io');

// App Setup
var app = express();
// Setup the server 
var server = app.listen(4000, function(){
    console.log('SERVER IS RUNING PORT 4000');
});


// Static files
app.use(express.static('public'));

// Socket.io Setup
var io = socket(server);

io.on('connection', function(socket){

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
})