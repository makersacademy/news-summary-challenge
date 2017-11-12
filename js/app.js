'use strict';

(function () {

  newsliController = new NewsliController(ArticleList, ArticleListView, ArticleView);

  window.addEventListener('load', function () {
    newsliController.loadContent();
  })

  var newsliController
})();