(function(exports) {
  function Article(content) {
    this.content = content;
  }

  Article.prototype.showContent = function() {
    return this.content;
  }

  exports.Article = Article;
})(this);

