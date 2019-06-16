(function(exports) {

  function ArticleList() {
    this.articles = [];
  }

  ArticleList.prototype.displayArticles = function() {
    return this.articles;
  }

  ArticleList.prototype.createArticle = function(header, url, image, body) {
    article = new Article(header, url, image, body);
    this.articles.push(article);
  }

  exports.ArticleList = ArticleList;

})(this);