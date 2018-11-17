(function(exports) {
  function Article(id, headline, webURL) {
    this.id = id;
    this.headline = headline;
    this.webURL = webURL;
  }

  exports.Article = Article;
})(this);
