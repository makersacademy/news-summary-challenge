(function(exports) {
  function Article(title, url, image, body) {
    this.title = title;
    this.url = url;
    this.image = image;
    this.body = body;
  }

  Article.prototype.getTitle = function() {
    return this.title
  };

  Article.prototype.getURL = function() {
    return this.url
  };

  Article.prototype.getBody = function() {
    return this.body
  };

  Article.prototype.getImage = function() {
    return this.image
  };

  exports.Article = Article;
})(this);