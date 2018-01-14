(function(exports) {
  var List = function() {
    this.articles = []
  }

  List.prototype.addArticle = function(article) {
    this.articles.push(article)
  }

  List.prototype.getArticles = function() {
    return this.articles
  }

  List.prototype.createAndAddArticle = function(url, headline, text, thumbnail) {
    var article = new Article(url, headline, text, thumbnail)
    this.addArticle(article)
  }

  exports.List = List;
})(this)
