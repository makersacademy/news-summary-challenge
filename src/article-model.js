(function(exports) {
  function Article(headline, id, url) {
    this.headline = headline;
    this.id = id;
    this.url = url;
  }

  Article.prototype.showHeadline = function() {
    return this.headline;
  };

  Article.prototype.showUrl = function() {
    return this.url;
  };

  exports.Article = Article;
})(this);
