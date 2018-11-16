(function (exports) {
  function Article(headline, body) {
    this.headline = headline
    this.body = body
  }

  Article.prototype.getHeadline = function () {
    return this.headline
  };

  Article.prototype.getBody = function () {
    return this.body
  };

  exports.Article = Article
})(this)
