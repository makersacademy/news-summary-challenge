const apiKey = require('./apiKey');
// let city = 'London';
const apiUrl = `https://content.guardianapis.com/search?api-key=${apiKey}`;

class NewsClient {
  getRepoInfo(callback) {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }
}

module.exports = NewsClient;