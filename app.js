(function() {

  window.addEventListener("load", function() {

    var newsArticleList = new NewsArticleList(NewsArticle);

    var newsArticleListView = new NewsArticleListView(newsArticleList);

    var controller = new Controller(newsArticleList, newsArticleListView, NewsArticleView)
    html = newsArticleListView.render();
    controller.render(html);

  })

})();
