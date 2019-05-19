(function() {
  window.addEventListener("load", function() {
    var newsController  =  new NewsController(Articles, ArticleListView)
    newsController.updateview();
  });
})();
