(function(exports) {

  var id = 0

  function Article(webTitle, webUrl) {
    this.headline = webTitle;
    this.url = webUrl;
    this.id = id++
  };

  Article.prototype.getHeadline = function() {
    return this.headline;
  };

  Article.prototype.getURL = function() {
    return this.url;
  };

  exports.Article = Article;
})(this);
