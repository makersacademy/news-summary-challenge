// const dotenv = require('dotenv')
// dotenv.config();
// const apiKey = `${process.env.API_KEY}`
// console.log(apiKey)

const Headlines = require("./headlines");

const headlines = new Headlines();

headlines
  .getByNewest()
  .then((data) => headlines.displayNews(data))
  .then(() => headlines.addSummaryLink())
  .then(() => headlines.showSummary());
