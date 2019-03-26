window.addEventListener('load', function() {
  var news = new NewsStories()
  news.getStories(function() {
    var newsListView = new NewsListView(news)
    controller = new NewsAppController(newsListView)
    controller.insertIntoApp()
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
    formattedList: function(newsListView) {
      return this._newsListView.format()
    }
  };

  exports.NewsAppController = NewsAppController
})(this);
