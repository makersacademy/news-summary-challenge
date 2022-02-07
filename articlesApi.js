// require('dotenv').config();
// const API_KEY = process.env.API_KEY;

const API_KEY = require('./apiKey');

class ArticlesApi {
  loadArticles(callback, query) {
    this.query = this.#queryToUrl(query);
    fetch(`https://content.guardianapis.com/search?q=${this.query}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${API_KEY}`)
      .then(response => response.json())
      .then((data) => {
        // console.log(data);
        callback(data);
      });
  }

  #queryToUrl(queryStr) {
    // Create query string from user input otherwise set a blank query
    queryStr ? this.query = queryStr.split(" ").join(",") : this.query = "";

    return this.query;
  }
}

module.exports = ArticlesApi;
