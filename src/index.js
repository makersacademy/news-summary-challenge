(function() {
  window.addEventListener("load", function() {
    var articleList = new ArticleList();
    var articleListView = new ArticleListView(articleList);
    var articleController = new ArticleController(articleListView);
    articleController.getArticles();
  });
})();
