const apiKey = require('./apiKey');
// let city = 'London';
const apiUrl = `https://content.guardianapis.com/search?api-key=${apiKey}`;

class GuardianApi {
  getArticleInfo(callback) {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        callback(data)
      });
  }
}

module.exports = GuardianApi;