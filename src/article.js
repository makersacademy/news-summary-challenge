(function(exports) {

  function Article({title, url, thumbnail}) {
    this.title = title;
    this.url = url;
    this.thumbnail = thumbnail;
  };

  Article.prototype.getTitle = function() {
    return this.title;
  };

  Article.prototype.getURL = function() {
    return this.url;
  };

  Article.prototype.getThumbnail = function() {
    return this.thumbnail;
  };

  exports.Article = Article;
})(this);
