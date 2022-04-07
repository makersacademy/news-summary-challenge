// require('dotenv').config();
// const API_KEY = process.env.API_KEY;

const API_KEY = require('./apiKey');

class ArticlesApi {
  loadArticles(callback, query) {
    this.url = this.#formatUrl(query);
    fetch(this.url)
      .then(response => response.json())
      .then((data) => {
        // console.log(data);
        callback(data);
      });
  }

  #formatUrl(query) {
    let queryString = "";
    // Create query string from user input otherwise set an empty query string
    query ? queryString = queryString.split(" ").join(",") : queryString;
    const url = `https://content.guardianapis.com/search?q=${queryString}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${API_KEY}`

    return url;
  }
}

module.exports = ArticlesApi;
