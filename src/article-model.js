(function(exports) {
  function Article(headline, id) {
    this.headline = headline;
    this.id = id;
  }

  Article.prototype.showHeadline = function() {
    return this.headline;
  };

  exports.Article = Article;
})(this);
