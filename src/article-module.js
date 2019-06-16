(function(exports) {
  function Article(title, url, image, body) {
    this.title = title;
    this.url = url;
    this.image = image;
    this.body = body;
  }

  Article.prototype.getTitle = function() {
    return this.title;
  }
  exports.Article = Article;
})(this);