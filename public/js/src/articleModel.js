(function(exports) {
  function Article(headline) {
    this.headline = headline;
    this.id
    this.url =''
  }
  Article.prototype.show = function() {
    return this.headline;
  }

  exports.Article = Article
})(this)
