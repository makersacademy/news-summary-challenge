const apiKey = require('./apikey');
const baseUrl = "http://localhost:3000/news";

class NewsApi {
  loadData(callback) {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => { 
        callback(data)
      })//.catch((error) {
      //   console.log('Request failed', error)
      // });
  }
}

module.exports = NewsApi;