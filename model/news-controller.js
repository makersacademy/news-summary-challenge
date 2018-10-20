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

  exports.NewsController = NewsController
})(this)
