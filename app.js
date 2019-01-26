'use strict';

(function() {

  window.addEventListener("load", function() {

    var newsArticleListModel = new NewsArticleListModel(
      NewsArticleModel,
      ApiConnector
    );

    var newsArticleListView = new NewsArticleListView(
      newsArticleListModel
    );

    var controller = new Controller(
      newsArticleListModel,
      newsArticleListView,
      NewsArticleView
     );

  });

})(this);
