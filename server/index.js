const { Server, Socket } = require("socket.io");

const io = new Server(8000);

io.on('connection', (socket) => {

});