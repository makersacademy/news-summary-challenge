const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors())

let headlines = [
  'This headline is coming from the server'
];

app.use(express.json());

app.get('/headlines', (_req, res) => {
  res.send(JSON.stringify(headlines));
});

app.post('/headlines', (req, res) => {
  headlines.push(req.body.content)
  res.send(JSON.stringify(headlines));
});

app.delete('/headlines', (req, res) => {
  headlines = [];
  res.send(JSON.stringify(headlines))
});

app.listen(PORT);