const apiKey = require('./apiKey')

class NewsApi {
  constructor() {
    this.url = `https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=thumbnail`;
  }
  loadData(callback, errorCallback) {
    fetch(this.url)
      .then(response => response.json())
      .then(data => {
        callback(data)
      })
      .catch(() => {
        errorCallback();
      });
  }
}

module.exports = NewsApi;