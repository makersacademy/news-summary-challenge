(function(exports) {
  function Article(headline, thumbnail, url) {
    this.headline = headline;
    this.img = thumbnail;
    this.url = url;
  }

  exports.Article = Article;
})(this)
