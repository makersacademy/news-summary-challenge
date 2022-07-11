const apiKey = require('./apikey');
const baseUrl = "https://content.guardianapis.com/search?format=json&api-key=";

class NewsApi {
  loadData(callback) {
    fetch(`${baseUrl}${apiKey}`, {mode: 'no-cors'})
      .then(response => response.json())
      .then(data => { 
        callback(data)
      }).catch((error) {
        console.log('Request failed', error)
      });
  }
}

module.exports = NewsApi;