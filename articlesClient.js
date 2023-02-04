const apiKey = require('./config')

class ArticlesClient{
  loadArticles(){
    return fetch(`https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey.apiKey}`)
      .then((response) => response.json())
      .then((articles) => {return articles})
  }

}

module.exports = ArticlesClient;