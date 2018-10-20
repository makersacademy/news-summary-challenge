'use strict'

(function(exports) {
  function SummaryController(articleList = new ArticleList(), listView = ArticleListView) {
    this.articleList = articleList
    this.view = new listView(articleList)
  }
})
