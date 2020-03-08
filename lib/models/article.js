(function(exports) {
  function Article(content) {
    this.content = content;
    this.summary = 'summary'
    this.id
  }

  Article.prototype.showContent = function() {
    return this.content;
  }

  Article.prototype.showSummary = function() {
    return this.summary;
  }

  exports.Article = Article;
})(this);

