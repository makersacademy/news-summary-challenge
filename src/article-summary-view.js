(function(exports) {
  function ArticleSummaryView(article) {
    this.article = article;
  }

  ArticleSummaryView.prototype.html = function() {
    var view = "<p>";
    console.log(this.article.summary)
    this.article.summary.forEach((sentence) => {
      view += sentence + "</br></br>"
    });
    view.slice(0, -2);
    view += "</p>";
    return view
    }

  exports.ArticleSummaryView = ArticleSummaryView;
})(this);
