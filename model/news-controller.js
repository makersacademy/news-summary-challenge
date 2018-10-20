'use strict';

(function(exports) {
  function NewsController(articleList = new ArticleList(), listView = ArticleListView) {
    this.articleList = articleList
    this.view = new ArticleListView(articleList)
  }

  exports.NewsController = NewsController
})(this)
