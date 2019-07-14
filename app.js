"use strict";

require('./lib/interface.js');

const express = require('express');
const server = express();
const port = 8000;

server.use(express.static('public'));

server.get('/', function(req, res) { 
  res.send('index.html');
  });

server.listen(port, () => console.log(`Listening on port ${port}!`));



