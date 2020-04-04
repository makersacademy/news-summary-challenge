'use strict';

(function(exports) {
  function NewsController(newsList = new NewsList) {
    this.newsList = newsList;
    this.headlinesView = new HeadlinesView(this.newsList);
  }

  NewsController.prototype.addArticle = function(headline) {
    this.newsList.addArticle(headline);
  }

  NewsController.prototype.displayHeadlines = function() {
    var html = this.headlinesView.displayHeadlines();

    document.getElementById('app').innerHTML = html;

  }

  exports.NewsController = NewsController
})(this);


var controller = new NewsController;
controller.addArticle('I am the first article');
controller.addArticle('I am the second article');
controller.displayHeadlines();
