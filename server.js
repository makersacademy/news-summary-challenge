require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/news", async (req, res) => {
  const response = await fetch(
    `${process.env.API_HOST}/search?api-key=${process.env.API_KEY}`
  );
  const data = await response.json();
  const results = data.response.results;
  res.send(JSON.stringify(results));
});

app.get("/search", async (req, res) => {
  const searchString = `q=${req.query.q}`;
  const response = await fetch(
    `${process.env.API_HOST}/search?q=${searchString}&api-key=${process.env.API_KEY}`
  );
  const data = await response.json();
  const results = data.response.results;
  res.send(JSON.stringify(results));
});

app.listen(port);
