(function(exports) {
  function NewsController(newsList){
    this.newsList = newsList
    this.newsList.addNewsItem("Hannah Montana running for 2020 Presidency")
    this.newsListView = new NewsListView(this.newsList);
   };
  NewsController.prototype.getHTML = function() {
    // html = this.newsListView.renderNewsItems()
    // div = document.getElementById("headlines").innerHTML = html
    document.getElementById("headlines").innerHTML = this.newsListView.renderNewsItems();
  };

  NewsController.prototype.makeUrlChangeShowNewsForCurrentPage = function() {
    window.addEventListener("hashchange", () => {
      this.showNewsForCurrentPage()
    });
  }
  NewsController.prototype.showNewsForCurrentPage = function() {
    this.showNews(this.getNewsfromUrl(window.location.hash))
  }
  NewsController.prototype.getNewsfromUrl = function(hash) {
    return hash.split('/')[1];
  };
  NewsController.prototype.showNews = function (id) {
    var news = this.newsList.news.find(function (news) {
      return news.getId() == id;
    });
    var view = new SingleNewsArticleView(news);
    return view.renderArticle();
  };
  exports.NewsController = NewsController;
})(this);

(function () {
  var newsController = new NewsController(new NewsList());
  newsController.getHTML();
  newsController.makeUrlChangeShowNewsForCurrentPage();
})();
