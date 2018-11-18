(function(exports) {
  function ArticleSummaryController(article) {
    this.article = article;
  }

  ArticleSummaryController.prototype.api = function() {
    this.getAPIs = new GetAPIs();
    this.getAPIs.summaryAPI(this.article);
    this.articleSummaryView = new ArticleSummaryView(this.article);
  };

  ArticleSummaryController.prototype.render = function() {
    var app = document.getElementById('app');
    app.innerHTML = this.articleSummaryView.html();
  };

  exports.ArticleSummaryController = ArticleSummaryController;
})(this);
