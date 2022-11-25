const apiKey = require('../apiKey');

class NewsClient {

  loadArticles(callback) {
    fetch('https://content.guardianapis.com/search?api-key=' + apiKey)
      .then(response => response.json())
        .then(articleData => {
          callback(articleData)
        });
  }


}

module.exports = NewsClient;