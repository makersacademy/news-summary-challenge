window.addEventListener('load', function() {
  var news = new NewsStories()
  news.getStories(function() {
    var newsListView = new NewsListView(news)
    controller = new NewsAppController(newsListView)
    controller.insertIntoApp()
    controller.showFullTextPage()
  });
});

(function(exports) {
  function NewsAppController(newsListView) {
    this._newsListView = newsListView
  }

  NewsAppController.prototype = {
    insertIntoApp: function() {
      document.getElementById("app").innerHTML = this.formattedList()
    },
    formattedList: function() {
      return this._newsListView.format()
    },
    showFullTextPage: function(page) {
      var page = this.findPage()
      var self = this
      window.addEventListener("hashchange", function() {
        document.getElementById("app").innerHTML = self._newsListView._list[page].body
      })
    },
    findPage: function() {
      return window.location.hash.split("#news/")[1];
    }
  };

  exports.NewsAppController = NewsAppController
})(this);
