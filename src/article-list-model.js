(function(exports) {
  function ArticleList(url, image) {
    this.listOfArticles = [];
    this.url = url;
    this.image = image;
  }

  ArticleList.prototype.showArticles = function() {
    return this.listOfArticles;
  };
  ArticleList.prototype.addArticle = function(headline) {
    var id = this.listOfArticles.length;
    var url = this.url;
    var image = this.image;
    var article = new Article(headline, id, url, image);
    this.listOfArticles.push(article);
  };

  exports.ArticleList = ArticleList;
})(this);
