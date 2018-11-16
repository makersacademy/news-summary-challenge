(function(exports) {
  function ArticleHeadlinesController () {
    this.getAPIs = new GetAPIs();
    this.articleList = this.getAPIs.headlinesAPI();
    this.articleListView = new ArticleListView(this.articleList);
  }

  ArticleHeadlinesController.prototype.render = function () {
    var app = document.getElementById("app");
    app.innerHTML = this.articleListView.html();
  };

  exports.ArticleHeadlinesController = ArticleHeadlinesController;
})(this);
