(function(exports) {
  function Article(headline, url) {
    this.headline = headline;
    this.url = url;
  }

  Article.prototype.showHeadline = function() {
    return this.headline;
  };

  Article.prototype.showURL = function() {
    return this.url;
  };

  exports.Article = Article;
})(this);
