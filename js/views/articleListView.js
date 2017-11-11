'use strict';

(function (exports) {
  exports.ArticleListView = function (articleList) {
    articles = articleList.allArticles();

    function allHeadlinesHTML() {
      html = '<div><ul>';
      articles.map((article) => {
        html += '<li><div><p id="headlines">' + article.showHeadline() + '</p>'
        + '<p><a href="' + _allUrlsHTML(article) + '">Click To Read</a></p></div></li>'
      });
      return html + "</ul></div>";
    }

    function _allUrlsHTML(article) {
      return article.showUrlToFullStory()
    }

    return {
      allHeadlinesHTML: allHeadlinesHTML
    }

    var articles, html
  }
})(this);