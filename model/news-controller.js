'use strict';

(function(exports) {
  function NewsController(articleList = new ArticleList(), listView = ArticleListView) {
    this.articleList = articleList
    this.view = new listView(articleList)
  }

  NewsController.prototype.insertHeadlineHtml = function() {
    var element = document.getElementById('app')
    element.innerHTML = this.view.stringifyHeadline()
  }

  NewsController.prototype.makeUrlChangeSummaryForCurrentPage = function() {
    var boundShowNewsForCurrentPage = this.showNewsForCurrentPage.bind(this)
    window.addEventListener("hashchange", boundShowNewsForCurrentPage);
  }

  NewsController.prototype.showNewsForCurrentPage = function() {
    var articleId = this.getArticleIdFromUrl(window.location)
    var articles = this.articleList.showAll()
    var article = articles.find(function(story) {
      return story.id === Number(articleId)
    })
    showSummary(article)
  }

  NewsController.prototype.getArticleIdFromUrl = function(location) {
    return location.hash.split('article/#')[1]
  }

  NewsController.prototype.showSummary = function(article) {
    
  }

  exports.NewsController = NewsController
})(this)
