// Dependencies
const http = require('http');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = http.createServer(app);

// Start App
server.listen(PORT, () => {
  console.log(`> Server now listening on port ${PORT}`);
});
