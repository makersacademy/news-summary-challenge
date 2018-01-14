(function(exports) {
  function ArticleView(article) {
    this.article = article;
  };

  ArticleView.prototype.createHtmlString = function() {
    var article = this.article
    return "<h1><a href='" + article.getURL() + "'>" + article.getHeadline() + "</a></h1><div>" + article.getSummary() + "</div>"
  };

  exports.ArticleView = ArticleView;
})(this);
