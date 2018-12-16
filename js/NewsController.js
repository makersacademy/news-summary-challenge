(function (exports) {

  function NewsController (newsList, newsListView, newsView) {

    this.newsList = newsList || new NewsList();
    this.newsListView = newsListView || new NewsListView(this.newsList);
    this.NewsView = newsView || new NewsView();

  };

  NewsController.prototype.import = function(html) {
    document.getElementById(html).innerHTML = this.newsListView.displayNews();
    }
  }

  NewsController.prototype.display = function(html) {
    var self = this;
    this.newsList.importNews(function() {
      self.import(html);
    });
  }

  exports.NewsController = NewsController

})(this);


// window.addEventListener("hashchange", function() {
//   if(window.location.hash == '#news') {
//
//     var html = self.newsListView.display()
//     self.display(html)
//
//   } else {
//
//     var newsId = window.location.hash.split('#news/')[1]
//     var news = self.newsList.findById(newsId)
//     var newsView = new self.NewsView(news)
//     var html = newsView.display()
//
//     self.display(html)
//   }
// })
