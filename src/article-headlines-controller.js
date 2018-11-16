(function(exports) {
  function ArticleHeadlinesController (articleList) {
    this.articleList = articleList;
    this.articleListView = new ArticleListView(articleList);
  }

  ArticleHeadlinesController.prototype.render = function () {
    var app = document.getElementById("app");
    app.innerHTML = this.articleListView.html();
  };

  exports.ArticleHeadlinesController = ArticleHeadlinesController;
})(this);
