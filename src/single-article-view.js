(function(exports) {
  function ArticleView(article) {
    this.article = article;
  }

  ArticleView.prototype.renderView = function() {
    return `<h3>${this.article.getTitle()}</h3><br>` +
    `<p>${this.article.getBody()}</p>`
  }

  ArticleView.prototype.renderTitle = function() {
    return `<li><h3>${this.article.getTitle()}</h3></li>`
  }

  exports.ArticleView = ArticleView;
})(this);
