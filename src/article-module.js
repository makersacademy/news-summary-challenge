(function(exports) {
  function Article(headline, url, image, body) {
    this.headline = headline;
    this.url = url;
    this.image = image;
    this.body = body;
  }

  Article.prototype.getHeadline = function() {
    return this.headline;
  }
  exports.Article = Article;
})(this);