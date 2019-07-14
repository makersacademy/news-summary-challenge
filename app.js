"use strict";

const express = require('express');
const server = express();
const port = 8000;

server.use(express.static('public'));

server.get('/', (req, res) => res.send('index.html'));

server.listen(port, () => console.log(`Listening on port ${port}!`));