(function(exports) {
  function HeadlineList() {
    this.articles = [];
  };

  HeadlineList.prototype.getArticles = function() {
    return this.articles;
  };

  HeadlineList.prototype.addArticle = function(article) {
    this.articles.push(article);
  };

  HeadlineList.prototype.createArticle = function(webTitle, webUrl, body) {
    article = new Article(webTitle, webUrl, body);
    this.addArticle(article);
  };

  exports.HeadlineList = HeadlineList;
})(this);
