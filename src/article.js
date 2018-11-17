(function(exports) {
  function Article(id, headline, webURL, summary) {
    this.id = id;
    this.headline = headline;
    this.webURL = webURL;
    this.summary = summary;
  }

  exports.Article = Article;
})(this);
