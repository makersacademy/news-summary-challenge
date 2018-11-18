(function(exports) {
  function ArticleSummaryView(article) {
    this.article = article;
  }

  ArticleSummaryView.prototype.html = function() {
    var view = "<p>";
    this.article.summary.forEach((sentence) => {
      view += sentence + "</br></br>"
    });
    view += "</p>";
    return view
    }

  exports.ArticleSummaryView = ArticleSummaryView;
})(this);
