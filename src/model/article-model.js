(function (exports) {

  function Article(thumbnail, headline, url) {
    this.thumbnail = thumbnail;
    this.headline = headline;
    this.url = url;
  }
  
  Article.prototype.thumbnail = function() {
    return this.thumbnail;
  }
  
  Article.prototype.headline = function() {
    return this.headline;
  }
    
  Article.prototype.url = function() {
    return this.url;
  }

  exports.Article = Article;
})(this);