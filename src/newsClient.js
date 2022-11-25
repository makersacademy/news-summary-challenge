const apiKey = require('../apiKey');

class NewsClient {

  loadArticles(callback) {
    fetch('https://content.guardianapis.com/search?show-elements=image&api-key=' + apiKey + '&show-fields=thumbnail')
      .then(response => response.json())
        .then(articleData => {
          callback(articleData)
        });
  }


}

module.exports = NewsClient;