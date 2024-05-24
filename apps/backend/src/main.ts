// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 8080;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket : any) => {
  console.log('a user connected');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg : string) => {  
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

server.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});






















// import express from 'express';

// const host = process.env.HOST ?? 'localhost';
// const port = process.env.PORT ? Number(process.env.PORT) : 8080;

// const app = express();

// app.get('/', (req, res) => {
//   res.send({ message: 'Hello API' });
// });

// app.listen(port, host, () => {
//   console.log(`[ ready ] http://${host}:${port}`);
// });
