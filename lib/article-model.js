(function(exports) {
  function Article(headline, body = '') {
    this._headline = headline;
    this._body = body;
  };

  Article.prototype.getHeadline = function () {
    return this._headline;
  };

  Article.prototype.getBody = function () {
    return this._body;
  };

  exports.Article = Article;
})(this);
