(function(exports) {

  function Article(title, url) {
    this.title = title;
    this.url = url;
  };

  Article.prototype.getTitle = function() {
    return this.title;
  };

  Article.prototype.getURL = function() {
    return this.url;
  };

  exports.Article = Article;
})(this);
