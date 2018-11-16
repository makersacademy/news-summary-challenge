(function (exports) {
  function Article(headline) {
    this.headline = headline
  }

  Article.prototype.getHeadline = function () {
    return this.headline
  };

  exports.Article = Article
})(this)
