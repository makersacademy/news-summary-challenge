'use strict';

(function() {

  var newsliController = new NewsliController(ArticleList, ArticleListView, ArticleView);

  window.addEventListener('load', function() {
    newsliController.loadContent();
  })
})();