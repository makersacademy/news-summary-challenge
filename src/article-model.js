(function(exports) {
  function Article(title, url, body) {
    this.title = title;
    this.url = url;
    this.body = body;
  }

  Article.prototype.getTitle = function() {
    return this.title
  };

  Article.prototype.getURL = function() {
    return this.url
  };

  Article.prototype.getBody = function() {
    return this.body
  };

  exports.Article = Article;
})(this);