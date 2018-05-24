const WebSocket = require('ws');

const server = new WebSocket.Server({
    port: 8888
});

server.on('connection', (socket) => {
    console.log('got connection: ' + socket);
    socket.on('message', (data) => {
        console.log(data.toString());
    });
});