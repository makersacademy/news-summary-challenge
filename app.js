const express = require('express');
const server = express();
const port = 8000;

server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static(`${__dirname}/node_modules/`));

server.get('/', function(req, res) { 
  res.send('index.html');
  res.send('/lib/interface.js');
  });

server.listen(port, (err) => {
  if(err) { console.log(err) };
  console.log(`Listening on port ${port}!`);
});