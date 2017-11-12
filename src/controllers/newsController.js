'use strict';

;(function (exports) {
  
  exports.NewsController = function (options) {

    var container = document.getElementById(options.containerId);
    var listModel = options.listModel;
    var summaryModel = options.summaryModel;
    
    function renderPage() {
      container.innerHTML = '';
      var stackCount = numberOfStackedArticles();
      for (var i = 0; i < stackCount; i++) {
        renderRow();
        stackCount = numberOfStackedArticles();
      };
    };
    
    function renderRow() {
      var widthCount = Math.floor(numberOfAdjacentArticles());
      for (var i = 0; i < widthCount; i++) {
        listModel.fetchArticle(showListItem);
      };
    };

    function renderSummary(articleId) {
      var article = listModel.getArticleById(articleId);
      summaryModel.fetchSummary(article, showSummary)
    };

    function showListItem(item) {
      var newLI = document.createElement('li');
      newLI.innerHTML = listView.listItemToHTML(item);
      container.appendChild(newLI);
      setTimeout(function() {
        newLI.className = "show";
      }, 30);
    };

    function showSummary(article) {
      container.innerHTML = summaryView.articleSummaryToHTML(article);
    };

    function attachEventListeners() {
      window.addEventListener('hashchange', hashChange)
      window.addEventListener('scroll', scrolledToBottom)
    };

    function hashChange() {
      if (window.location.hash === '') {
        renderPage();
      } else {
        renderSummary(getArticleIdFromUrl(window.location));
      };
    };

    function scrolledToBottom() {
      var wrapper = document.getElementById('wrapper');
      if (wrapper.getBoundingClientRect().bottom == window.innerHeight) {
          renderRow();
      }
    };

    function numberOfStackedArticles() {
      var articles = document.getElementsByClassName('article');
      if (!articles[0]) return (window.innerHeight / 400);
      return Math.ceil((window.innerHeight / articles[0].offsetHeight));
    };
    
    function numberOfAdjacentArticles() {
      var articles = document.getElementsByClassName('article');
      if (!articles[0]) return (window.innerWidth / 500);
      return (window.innerWidth / articles[0].offsetWidth);
    };
    
    function getArticleIdFromUrl(location) {
      return location.hash.split('#')[1];
    };

    return {
      renderPage: renderPage,
      renderRow: renderRow,
      renderSummary: renderSummary,
      attachEventListeners: attachEventListeners
    };

  };
  
})(this);
