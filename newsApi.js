const apiKey = require('./apiKey')
class NewsApi {
  constructor() {
    this.url = `https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=thumbnail`;
  }
  loadData(callback, errorCallback) {
    fetch('http://localhost:3000/news')
      .then(response => response.json())
      .then(data => {
        callback(data)
      // })
      // .catch(() => {
      //   errorCallback();
      });
  }
}

module.exports = NewsApi;