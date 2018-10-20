(function(exports) {
  function NewsArticleList() {
    this.articles = [];
  }

  NewsArticleList.prototype.viewAll = function () {
    return this.articles;
  };

  NewsArticleList.prototype.addArticle = function (headline) {
    var article = new NewsArticle(headline);
    return this.articles.push(headline);
  };

  exports.NewsArticleList = NewsArticleList;
})(this);
