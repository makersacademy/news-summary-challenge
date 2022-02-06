const API_KEY = require('./apiKey')

class NewsApi {
  constructor() {
    this.url = `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&api-key=${API_KEY}`
  }
  loadArticles(callback) {
    fetch(this.url)
      .then(res => res.json())
      .then(data => callback(data));
  }
}

module.exports = NewsApi; 