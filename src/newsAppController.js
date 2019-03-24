window.addEventListener('load', function() {
  var news = new NewsStories()
console.log(news)
  news.getStories()
console.log(news._newsStoriesArray)
  var listView = new NewsListView(news)
console.log(listView)
  var controller = new NewsAppController(listView)
console.log(controller)
  controller.insertIntoApp()
console.log(controller.insertIntoApp())
console.log(document.getElementById("app").innerHTML)
});

(function(exports) {
  function NewsAppController(newsListView = new NewsListView()) {
    this._newsListView = newsListView
    // this._list = newsListView._list;
    // this._formattedList = newsListView.format();
  }

  NewsAppController.prototype.formattedList = function() {
console.log(this._newsListView.format())
    return this._newsListView.format()
  };

  NewsAppController.prototype.insertIntoApp = function() {
console.log(this.formattedList())
    document.getElementById("app").innerHTML = this.formattedList()
  };

  exports.NewsAppController = NewsAppController
})(this);
