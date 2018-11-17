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
  exports.NewsController = NewsController;
})(this);
