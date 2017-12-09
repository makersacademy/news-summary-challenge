(function() {
  'use strict';

  var articleController = new ArticleController(
    ArticleListView,
    new ArticleList(Article),
    SingleArticleView,
    XMLHttpRequest
  );
  // articleController.ajaxRequest();
  articleController.useSeedData(new SeedForArticleList().seed());
  articleController.hashChangeListener();

}());
