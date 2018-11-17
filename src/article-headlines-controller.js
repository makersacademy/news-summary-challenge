(function(exports) {
  function ArticleHeadlinesController () {
    this.getAPIs = 0;
    this.articleList = 0;
    this.articleListView = 0;
  }

  ArticleHeadlinesController.prototype.api = function () {
    this.getAPIs = new GetAPIs();
    this.articleList = this.getAPIs.getHeadlines();
    this.articleListView = new ArticleListView(this.articleList);
  };

  ArticleHeadlinesController.prototype.render = function () {
    var app = document.getElementById("app");
    app.innerHTML = this.articleListView.html();
  };

  exports.ArticleHeadlinesController = ArticleHeadlinesController;
})(this);
