(function(exports) {
  function ArticleList() {
    this.articles = []
  }

  ArticleList.prototype.add = function(article) {
    this.articles.push(new Article(article))
  }

  ArticleList.prototype.showArticles = function() {
    return this.articles
  }

  exports.ArticleList = ArticleList;
})(this);
