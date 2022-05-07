const ApiKey = require('./apiKey');

class NewsApi {

  constructor() {
    this.url = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${ApiKey}`
  }

  getNews(callback) {
    fetch(this.url)
      .then(response => response.json())
      .then((data) => {
        callback(data);
      })
  }
}

module.exports = NewsApi;