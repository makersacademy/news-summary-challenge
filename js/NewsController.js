(function (exports) {

  function NewsController (newsList, newsListView, newsView) {
    this.newsList = newsList
    this.newsListView = newsListView
    this.NewsView = newsView

    this._set()
  };

  NewsController.prototype._set = function () {
    var self = this

    window.addEventListener("submit", function(event) {
      event.preventDefault()
      self.newsList.createNews(event.target[0].value)
      var html = self.newsListView.display()

      self.display(html)
    })

    window.addEventListener("hashchange", function() {
      if(window.location.hash == '#news') {

        var html = self.newsListView.display()
        self.display(html)

      } else {

        var newsId = window.location.hash.split('#news/')[1]
        var news = self.newsList.findById(newsId)
        var newsView = new self.NewsView(news)
        var html = newsView.display()

        self.display(html)
      }
    })

  }

  NewsController.prototype.display = function (html) {
    document.getElementById("app").innerHTML = html
  }

  exports.NewsController = NewsController

})(this);
