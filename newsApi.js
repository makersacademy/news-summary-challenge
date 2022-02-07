
   
const GUARDIAN_API_KEY = require('./env');


class NewsApi {
  constructor() {
    this.apiKey = GUARDIAN_API_KEY;
  }
  getRepoInfo(callback) {
    fetch(`https://content.guardianapis.com/search?api-key=${this.apiKey}`)
      .then(response => response.json())
      .then(data => {
        callback(data.response.results)
      })
      .catch((error) => {
      console.error('Error:', error)
      });
  }
}

module.exports = NewsApi;