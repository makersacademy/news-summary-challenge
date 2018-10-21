'use strict';

(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList
  }

  ArticleListView.prototype.stringifyHeadline = function() {
    var string = ''
    this.articleList.list.map(article => string += `<div>${article.image}<a href='#article/${article.id}'>${article.headline}</a><button type='submit' id='full-article${article.id}'>Read full article</button></div>`)
    // string += '</ul>'
    return string
  }

  exports.ArticleListView = ArticleListView
})(this)
