const apiKey = require('./apiKey');

class NewsApi {
  constructor() {
    this.apiKey = apiKey;
  }

  loadNews(callback) {
    fetch(
      `https://content.guardianapis.com/search?q=latest&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${this.apiKey}`
    )
      .then((info) => info.json())
      .then((responseJson) => {
        callback(responseJson.response.results);
      });
  }
}

module.exports = NewsApi;
