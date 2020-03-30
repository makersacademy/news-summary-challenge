(function(exports) {
  function ArticleList() {
    this.listOfArticles = [];
  }

  ArticleList.prototype.showArticles = function() {
    return this.listOfArticles;
  };
  ArticleList.prototype.addArticle = function(headline) {
    var id = this.listOfArticles.length;
    var article = new Article(headline, id);
    this.listOfArticles.push(article);
  };

  exports.ArticleList = ArticleList;
})(this);
