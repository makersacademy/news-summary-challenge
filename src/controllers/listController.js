'use strict';

;(function (exports) {
  
  exports.ListController = function (options) {

    var container = document.getElementById(options.containerId);
    var listModel = options.listModel;
    var listView = new options.ListView(listModel);
    var counter = 0;

    function showListItem(item) {
      counter++;
      container.innerHTML += ((listView.listItemToHTML(item) || ''));
    }

    function numberOfStackedArticles() {
      var articles = document.getElementsByClassName('article');
      if (!articles[0]) return ( window.innerHeight / 400);
      return Math.ceil((window.innerHeight/ articles[0].offsetHeight));
    }

    function numberOfAdjacentArticles() {
      var articles = document.getElementsByClassName('article');
      if (!articles[0]) return (window.innerWidth / 500);
      return (window.innerWidth / articles[0].offsetWidth);
    }

    function renderPage() {
      var stackCount = numberOfStackedArticles();
      for (var i = 0; i < stackCount; i++) {
        console.log(i);
        renderRow();
        stackCount = numberOfStackedArticles();
      }
    }

    function renderRow() {
      var widthCount = Math.floor(numberOfAdjacentArticles()); 
      for (var i = 0; i < widthCount; i++) {
        console.log(widthCount)
        listModel.fetchArticle(showListItem);
      };
    }
  
    return {
      renderPage: renderPage,
      renderRow: renderRow
    }

  }
  
})(this);
