(function(exports) {
  function ArticleView(article) {
    this.article = article;
  };

  ArticleView.prototype.createHtmlString = function(summary) {
    var article = this.article
    return "<h1><a href='" + article.getURL() + "'>" + article.getHeadline() + "</a></h1><div>" + summary + "</div>"
  };

  exports.ArticleView = ArticleView;
})(this);
