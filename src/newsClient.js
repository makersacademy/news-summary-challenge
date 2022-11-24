class NewsClient {

  loadArticles(callback) {
    fetch('https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=test')
      .then(response => response.json())
        .then(articleData => {
          callback(articleData)
        });
  }


}

module.exports = NewsClient;