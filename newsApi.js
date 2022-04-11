const guardianApiKey = require('./apiKey');

class NewsApi {
  constructor() {
    const guardianApi = new guardianApiKey;
    this.url = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${guardianApi.key}`;
    this.search = ''
  }

  loadArticles(callback) {
    fetch(this.url)
    .then(result => result.json())
    .then(data => callback(data))
    .catch(function() {
      console.log('looks like an error there, pal');
    });
  }

  searchArticles(searchTerm, callback) {
    const guardianApi = new guardianApiKey;
    this.url = `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&q=${searchTerm}&api-key=${guardianApi.key}`;
    this.loadArticles(callback);
  }
}

module.exports = NewsApi;