(function() {

  window.addEventListener("load", function() {

    var apiConnector = new ApiConnector();
    
    var newsArticleListModel = new NewsArticleListModel(NewsArticleModel, apiConnector);

    var newsArticleListView = new NewsArticleListView(newsArticleListModel);

    var controller = new Controller(newsArticleListModel, newsArticleListView, NewsArticleView, apiConnector)

  })

})(this);
