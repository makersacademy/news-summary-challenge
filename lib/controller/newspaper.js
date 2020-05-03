function Newspaper() {
  api = new guardianAPI()
}

Newspaper.prototype.printNews = function() {
  this.content = api.makeRequest('http://content.guardianapis.com/search?q=headlines&show-fields=headline,thumbnail,body,shortUrl,bodyText&api-key=test')
}
