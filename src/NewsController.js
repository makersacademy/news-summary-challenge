(function (exports) {
  function NewsController(newsList = new NewsList(), newsListView = NewsListView) {
    this.newsList = newsList;
    this.newsListView = new NewsListView(newsList);
  }

  NewsController.prototype.getHTML = function () {
    var app = document.getElementById("app")
    return app.innerHTML = this.newsListView.getHTML();
};

    exports.NewsController = NewsController;
})(this);

var newsController = new NewsController()
newsController.getHTML();
