(function (exports) {
  function ArticleList() {
    this.articles = []
  }

  ArticleList.prototype.getArticles = function () {
    return this.articles
  };

  ArticleList.prototype.add = function (headline, body) {
    var article = new Article(headline, body)
    this.articles.push(article)
  };

  exports.ArticleList = ArticleList
})(this)
