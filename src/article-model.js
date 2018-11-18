(function(exports) {
  function Article(title, body) {
    this.title = title;
    this.body = body;
  }

  Article.prototype.getTitle = function() {
    return this.title;
  }

  Article.prototype.getBody = function() {
    return this.body;
  }

  exports.Article = Article;
})(this);
