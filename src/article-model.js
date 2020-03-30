(function(exports) {
  function Article(headline, id, url, image) {
    this.headline = headline;
    this.id = id;
    this.url = url;
    this.image = image;
  }

  Article.prototype.showHeadline = function() {
    return this.headline;
  };

  Article.prototype.showUrl = function() {
    return this.url;
  };

  Article.prototype.showImage = function() {
    return this.image;
  };

  exports.Article = Article;
})(this);
