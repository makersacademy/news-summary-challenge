(function() {

  window.addEventListener("load", function() {

    var newsArticleListModel = new NewsArticleListModel(NewsArticleModel);

    var newsArticleListView = new NewsArticleListView(newsArticleListModel);

    var controller = new Controller(newsArticleListModel, newsArticleListView, NewsArticleView)
    html = newsArticleListView.render();
    controller.render('app', html);

  })

})();
