'use strict';

(function() {

  var newsliController = new NewsliController(ArticleList, ArticleListView);

  window.addEventListener('load', function() {
    newsliController.loadContent()
  })

})();