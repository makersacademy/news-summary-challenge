"use strict";

(function(exports) {

  function NewsController(headlineList) {
    this.headlineListView = new HeadlineListView(headlineList);
  };

  NewsController.prototype.renderHTML = function() {
    var element = document.getElementById('app')
    element.innerHTML = this.headlineListView.returnHeadlineHTML();
  };

  exports.NewsController = NewsController;

})(this);
