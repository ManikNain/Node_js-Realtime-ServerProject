const express = require('express')
// const app = express();

// const http = require('http');
// const server = http.createServer(app);



// const socketIO = require('socket.io');
// const io = socketIO(server);

// const port = process.env.port || 3000;

// // var server=http.createServer(function(req,res){
// //     res.writeHead(200);
// //     res.end("Hello world");
// // });
// server.listen(3000,function(){
// console.log('Server running on port 3000')
// });

// io.on('connection',(socket)=>{
// console.log('user connected');
// });



//   app.get('/', (req, res) => {
//     res.send('<h1>Hey Socket.io</h1>');
//   });

// io.on('new-message', (message) => {
//     console.log('new-message :' + message);
//   });


const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  

http.listen(3000, () => {
  console.log('listening on *:3000');
});

  io.on('connection', (socket) => {
    socket.on('my message', (msg) => {
      io.emit('my broadcast', `server: ${msg}`);
    });
    socket.on('my message', (msg) => {
        console.log('message: ' + msg);
      });
  });

  