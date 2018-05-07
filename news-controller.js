// document.getElementById("headline").innerHTML = "Howdy"

(function(exports) {
  function NewsController(list = new NewsList) {
    news = new News("Stormy Daniels is running for President!")
    list.store(news.text)

    this.view = new NewsListView(list);
  };

  NewsController.prototype.getHTML = function() {
    document.getElementById("headlines").innerHTML = this.view.display();
  };
  exports.NewsController = NewsController;
})(this);