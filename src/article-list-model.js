(function(exports) {
  function ArticleList() {
    this.listOfArticles = [];
  }

  ArticleList.prototype.showArticles = function() {
    return this.listOfArticles;
  };
  ArticleList.prototype.addArticle = function(headline) {
    var article = new Article(headline);
    this.listOfArticles.push(article);
  };

  exports.ArticleList = ArticleList;
})(this);
