// document.getElementById("headline").innerHTML = "Howdy"

(function(exports) {
  function NewsController(list = new NewsList){
    news = new News("Stormy Daniels is running for President!")
    this.list = list
    list.store(news.text)

    this.view = new NewsListView(list);

  };
  NewsController.prototype.getHTML = function() {
    document.getElementById("headline").innerHTML = this.view.display();
  };
  exports.NewsController = NewsController;
})(this);
