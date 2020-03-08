(function(exportOut) {
  function Article(content) {
    this.content = content;
  }

  Article.prototype.showContent = function() {
    return this.content;
  }

  exportOut.Article = Article;
})(this);