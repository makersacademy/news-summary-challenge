function Newspaper() {
  api = new guardianAPI()
  this.articles = []
}

Newspaper.prototype.printNews = function() {
  // this.content = api.makeRequest('http://content.guardianapis.com/search?q=headlines&show-fields=headline,thumbnail,body,shortUrl,bodyText&api-key=test')
  this.content = api.makeRequest('./lib/models/api-data.json')
  this.createArticles();

  return this.articles
}

Newspaper.prototype.createArticles = function() {
  this.content.forEach(story => {
    article = new Article()
    article.fill(story)
    this.articles.push(article)
  })
}

