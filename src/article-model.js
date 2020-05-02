(function(exports) {
  function Article(headline, id, url, image, body) {
    this.headline = headline;
    this.id = id;
    this.url = url;
    this.image = image;
    this.body = body;
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

  Article.prototype.showBody = function() {
    return this.body;
  };

  exports.Article = Article;
})(this);
