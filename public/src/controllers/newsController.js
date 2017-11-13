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
        renderItem();
      };
    };

    function renderItem() {
      var newLI = document.createElement('li');
      var text = document.createTextNode('loading...');
      newLI.appendChild(text);
      container.appendChild(newLI);
      listModel.fetchArticle(showListItem);
    };

    function renderSummary(articleId) {
      var article = listModel.getArticleById(articleId);
      container.innerHTML = '';
      summaryModel.fetchSummary(article, showSummary)
    };

    function showListItem(item) {
      var li = nextEmptyLi();
      li.innerHTML = listView.listItemToHTML(item);
      container.appendChild(li);
      setTimeout(function() {
        li.className = "show";
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
      if (wrapper.getBoundingClientRect().bottom == (window.innerHeight)) {
        renderRow();
      }
    };
    
    function nextEmptyLi() {
      var listElements = [].slice.call(document.querySelectorAll('li'));
      return listElements.find(function (li) {
        return li.innerHTML === 'loading...';
      });
    };
    
    function numberOfStackedArticles() {
      var articles = document.getElementsByClassName('article');
      if (!articles[0]) return (window.innerHeight / 400);
      return Math.ceil((window.innerHeight / articles[0].offsetHeight));
    };
    
    function numberOfAdjacentArticles() {
      var articles = document.getElementsByClassName('article');
      if (!articles[0]) return Math.floor(window.innerWidth / 540);
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
