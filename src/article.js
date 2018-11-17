(function(exports) {
  function Article(id, headline, webURL) {
    this.id = id;
    this.headline = headline;
    this.webURL = webURL;
  }

  Article.prototype.createSummary = function(summary) {
    return this.summary = summary
  }

  exports.Article = Article;
})(this);
