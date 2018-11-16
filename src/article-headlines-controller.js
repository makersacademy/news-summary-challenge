(function(exports) {
  function ArticleHeadlinesController (articleList) {
    this.articleList = articleList;
    this.articleListView = new ArticleListView(articleList);
  }
  exports.ArticleHeadlinesController = ArticleHeadlinesController;
})(this);
