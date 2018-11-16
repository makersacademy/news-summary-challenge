(function (exports) {
  function ArticleList() {
    this.articles = []
  }

  ArticleList.prototype.getArticles = function () {
    return this.articles
  };

  exports.ArticleList = ArticleList
})(this)
