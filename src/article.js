(function(exports) {
  let idCounter = 0
  function Article(article) {
    this.title = article['response']['content']['webTitle']
    this.body = article['response']['content']['fields']['body']
    this.id = idCounter++
  }

  Article.prototype.readTitle = function() {
    return this.title;
  }

  Article.prototype.readBody = function() {
    return this.body;
  }

  exports.Article = Article;
})(this);
