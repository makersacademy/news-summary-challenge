(function(exports) {

  var id = 0
  
  function Article(webTitle, webUrl, body) {
    this.headline = webTitle;
    this.url = webUrl;
    this.summary = body;
    this.id = id++
  };

  Article.prototype.getHeadline = function() {
    return this.headline;
  };

  Article.prototype.getURL = function() {
    return this.url;
  };

  Article.prototype.getSummary = function() {
    return this.summary;
  };

  exports.Article = Article;
})(this);
