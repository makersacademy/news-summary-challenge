'use strict';

(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList
  }

  ArticleListView.prototype.stringifyHeadline = function() {
    var string = '<ul>'
    this.articleList.list.map(article => string += `<li><div><a href='article/#${article.id}'>${article.headline}</a></div></li>`)
    string += '</ul>'
    return string
  }

  exports.ArticleListView = ArticleListView
})(this)
