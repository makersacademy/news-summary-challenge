'use strict';

console.log("Hello, I'm in the app");

(function() {

  var newsliController = new NewsliController(ArticleList, ArticleListView);

  window.addEventListener('load', function() {
    newsliController.loadContent()
  })

})();