(function(exports) {
  function ArticleSummaryView(article) {
    this.article = article;
  }

  ArticleSummaryView.prototype.html = function() {
    return "<div>" + this.article.summary + "</div>"
  }

  exports.ArticleSummaryView = ArticleSummaryView;
})(this);
