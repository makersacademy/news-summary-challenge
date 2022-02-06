const API_KEY = require('./apiKey')

class NewsApi {
  constructor() {
    this.search = ""
    this.url = `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&q=${this.search}&api-key=${API_KEY}`
  }
  loadArticles(callback) {
    fetch(this.url)
      .then(res => res.json())
      .then(data => callback(data))
      .catch(function() {
        console.log("error");
    });
  }

  searchArticles(search, callback) {
    this.url = `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&q=${search}&api-key=${API_KEY}`
    console.log(this.url)
    this.loadArticles(callback);
  }
}

module.exports = NewsApi; 