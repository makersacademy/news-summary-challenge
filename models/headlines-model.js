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

  HeadlineList.prototype.createArticle = function(webTitle, webUrl, thumbnail) {
    article = new ArticleID(webTitle, webUrl, thumbnail);
    this.addArticle(article);
  };

  HeadlineList.prototype.getArticleById = function(id) {
    return this.articles.find(function(article) {
      return article.id === id
    });
  };

  exports.HeadlineList = HeadlineList;
})(this);
