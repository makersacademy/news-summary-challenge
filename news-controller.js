(function(exports) {
  function NewsController(newsList) {
    this.newsList = newsList;
  }

  NewsController.prototype.displayHeadlines = function() {

    var pageContent = new NewsListHTML(this.newsList);
    document.getElementById("app").innerHTML = pageContent.generateHTML();
  };

  exports.NewsController = NewsController;
})(this);

