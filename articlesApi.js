// require('dotenv').config();
// const API_KEY = process.env.API_KEY;

const API_KEY = require('./apiKey');

class ArticlesApi {
  loadArticles(callback) {
    fetch(`https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${API_KEY}`)
      .then(response => response.json())
      .then((data) => {
        // console.log(data);
        callback(data);
      });
  }
}

module.exports = ArticlesApi;
