'use strict';

(function(exports) {
  function NewsController(newsList = new NewsList) {
    this.newsList = newsList;
    this.headlinesView = new HeadlinesView(this.newsList);
  }

  NewsController.prototype.getArticles = function(headline) {
    this.newsList.getApiData();
  }

  NewsController.prototype.displayHeadlines = function() {
    var html = this.headlinesView.displayHeadlines();

    document.getElementById('app').innerHTML = html;
  }

  exports.NewsController = NewsController

})(this);


var controller = new NewsController;
controller.getArticles();
// controller.displayHeadlines()

// Why doesn't it work without the timer ??
setTimeout(function() {
  controller.displayHeadlines();
}, 500);
