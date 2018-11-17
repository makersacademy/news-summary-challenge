(function(exports) {
  function ArticleSummaryController(article) {
    this.article = article;
    this.articleSummaryView = new ArticleSummaryView(article);
  }

  ArticleSummaryController.prototype.render = function() {
    var app = document.getElementById('app');
    app.innerHTML = this.articleSummaryView.html();
  };

  exports.ArticleSummaryController = ArticleSummaryController;
})(this);
