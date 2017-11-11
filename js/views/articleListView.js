'use strict';

(function (exports) {
  exports.ArticleListView = function (articleList) {

    articles = articleList.allArticles();

    function allHeadlinesHTML() {
      html = '<div id="headlines"><ul>';
      articles.map((article, index) => {
        html += '<li id="' + index + '">' + article.showHeadline() + '</li>'
      })
      return html + '</ul></div>'
    }

    return {
      allHeadlinesHTML: allHeadlinesHTML
    }

    var articles, html
  }
})(this);