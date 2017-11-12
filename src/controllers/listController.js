'use strict';

;(function (exports) {
  
  exports.ListController = function (options) {

    var container = document.getElementById(options.containerId);
    var listModel = options.listModel;
    var listView = new options.ListView(listModel);
    var counter = 0;

    function showListItem() {
      counter++;
      container.innerHTML += ((listView.listItemToHTML(counter) || ''));
    }

    function stackedArticleHeight() {
      var articles = document.getElementsByClassName('article');
      var height = 0;
      for (var i = 0; i < articles.length; i++) {
        height += (articles[i].offsetHeight);
      }
      return (height / numberOfAdjacentArticles());
    }

    function numberOfAdjacentArticles() {
      var articles = document.getElementsByClassName('article');
      if (!articles[0]) return (window.innerWidth / 500);
      return (window.innerWidth / articles[0].offsetWidth);
    }

    function renderPage() {
      var pageHeight = window.innerHeight;
      var height = stackedArticleHeight();
      while ( height < pageHeight ) {
        renderRow();
        height = stackedArticleHeight();
      }
    }

    function renderRow() {
      var widthCount = numberOfAdjacentArticles();      
      for (var i = 0; i < widthCount; i++) { showListItem() };
    }
  
    return {
      showListItem: showListItem,
      renderPage: renderPage
    }

  }
  
})(this);
