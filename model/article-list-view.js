'use strict';

(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList
  }

  ArticleListView.prototype.stringifyHeadline = function() {
    var string = ''
    this.articleList.list.map(article => string += `<div id='article'>${article.image}<a id='article${article.id}' href='#article/${article.id}'>${article.headline}</a> <br><br><a href='${article.link}'>Read full article</a></div>`)
    return string
  }

  exports.ArticleListView = ArticleListView
})(this)
