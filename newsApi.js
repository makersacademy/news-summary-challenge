const ApiKey = require('./apiKey');

class NewsApi {

  constructor() {
    this.urlBeginning = 'https://content.guardianapis.com/search?q=';
    this.urlEnd = `&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${ApiKey}`;
    this.url = this.urlBeginning + this.urlEnd

  }

  getNews(callback) {
    fetch(this.url)
      .then(response => response.json())
      .then((data) => {
        callback(data);
      })
  }

  setUrl(searchQuery) {
    this.url = this.urlBeginning + searchQuery + this.urlEnd;
  }
}

module.exports = NewsApi;