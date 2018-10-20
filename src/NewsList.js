(function(exports) {
  function NewsList() {
    this.articles = [];
  }

  NewsList.prototype.viewAll = function () {
    return this.articles;
  };

  NewsList.prototype.addArticle = function (headline) {
    var article = new NewsArticle(headline);
    return this.articles.push(article);
  };

  exports.NewsList = NewsList;
})(this);
