class ArticlesClient{
  loadArticles(){
    return fetch('https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=688e0b02-080a-4072-9909-1780b13e4fd6')
      .then((response) => response.json())
      .then((articles) => {return articles})
  }
}

module.exports = ArticlesClient;