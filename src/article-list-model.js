(function(exports) {
  function ArticleList(url) {
    this.listOfArticles = [];
    this.url = url;
  }

  ArticleList.prototype.showArticles = function() {
    return this.listOfArticles;
  };
  ArticleList.prototype.addArticle = function(headline) {
    var id = this.listOfArticles.length;
    var url = this.url;
    var article = new Article(headline, id, url);
    this.listOfArticles.push(article);
  };

  exports.ArticleList = ArticleList;
})(this);
