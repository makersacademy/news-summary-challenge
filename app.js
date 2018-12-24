(function() {

  window.addEventListener("load", function() {

    var apiConnector = new ApiConnector("http://content.guardianapis.com/search?show-fields=body,headline,thumbnail&api-key=88771be1-78d1-463a-b3aa-88d7364df580");
    var newsArticleListModel = new NewsArticleListModel(NewsArticleModel, apiConnector);

    var newsArticleListView = new NewsArticleListView(newsArticleListModel);

    var controller = new Controller(newsArticleListModel, newsArticleListView, NewsArticleView, apiConnector)

  })

})(this);
