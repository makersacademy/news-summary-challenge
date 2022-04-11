// require('dotenv').config();
// const API_KEY = process.env.API_KEY;

const API_KEY = require('./apiKey');

class ArticlesApi {
  loadArticles(callback, query) {
    this.url = this._formatUrl(query);
    fetch(this.url)
      .then(response => response.json())
      .then((data) => {
        callback(data);
      });
  }

  _formatUrl(query) {
    // Create query string from user input otherwise set an empty query string
    let queryString = typeof query !== "undefined" ? query.split(" ").join(",") : "";
    let url = `https://content.guardianapis.com/search?q=${queryString}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${API_KEY}`
    return url;
  }
}

module.exports = ArticlesApi;
