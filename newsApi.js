const GUARDIAN_API_KEY = require('./apiKey.env');

class NewsApi {
  constructor() {
    this.url = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${process.env.GUARDIAN_API_KEY}`;
    this.search = ''
  }

  loadArticles(callback) {
    fetch(this.url)
    .then(res => res.json())
    .then(data => callback(data))
    .catch(function() {
      console.log('error');
    });
  }

  searchArticles(searchTerm, callback) {
    this.url = `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&q=${searchTerm}&api-key=${process.env.GUARDIAN_API_KEY}`;
    this.loadArticles(callback);
  }
}

module.exports = NewsApi;