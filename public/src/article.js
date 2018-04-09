(function(exports) {
  function Article(title, body) {
    this._title = title
    this._body = body
  }

  Article.prototype.getTitle = function() {
    return this._title;
  }

  Article.prototype.getBody = function() {
    return this._body;
  }

  exports.Article = Article;
})(this);
