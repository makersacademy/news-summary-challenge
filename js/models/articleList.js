'use strict';

(function (exports) {
  exports.ArticleList = function () {

    articles = [];

    function allArticles() {
      return articles;
    }

    return {
      allArticles: allArticles
    }

    var articles;
  }
})(this);