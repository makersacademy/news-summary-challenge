const apiKey = require('../apiKey');

class NewsClient {

  loadArticles(callback) {
    fetch('https://content.guardianapis.com/search?&api-key=' + apiKey + '&show-fields=thumbnail')
      .then(response => response.json())
        .then(articleData => {
          callback(articleData)
        });
  }

  searchArticles(searchQuery, callback) {
    fetch('https://content.guardianapis.com/search?q=' + searchQuery + '&api-key=' + apiKey + '&show-fields=thumbnail')
      .then(response => response.json())
        .then(articleData => {
          callback(articleData)
        });
  }


}

module.exports = NewsClient;