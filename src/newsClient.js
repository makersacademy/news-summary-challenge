const API_KEY = require('./apiKey.js');

class NewsClient {
  loadNews(searchTerm = 'uk', callback) {
    fetch(
      `https://content.guardianapis.com/search?q=${searchTerm}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }

  // searchNews(searchTerm, callback) {
  //   fetch(
  //     `https://content.guardianapis.com/search?q=${searchTerm}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${API_KEY}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       callback(data);
  //     });
  // }
}

module.exports = NewsClient;
