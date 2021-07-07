(function(exports) {
  function ArticleList() {
    this.articles = []
  }

  ArticleList.prototype.add = function(article, summary) {
    this.articles.push(new Article(article, summary))
  }

  ArticleList.prototype.showArticles = function() {
    return this.articles
  }

  ArticleList.prototype.findById = function(id) {
    var arr = this.articles.filter(article => article.id === id)
    return arr[0]
  }

  exports.ArticleList = ArticleList;
})(this);
