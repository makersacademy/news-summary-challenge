(function(exports) {
  function Article(headline, url) {
    this.headline = headline;
    this.id
    this.url =''
  }
  Article.prototype.show = function() {
    return this.headline;
  }

  exports.Article = Article
})(this)
