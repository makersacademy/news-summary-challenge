"use strict";

(function (exports) {
  function ArticleList () {
    var rugbyArticles = []

    return {
      addArticle: function (rugbyArticle) {
        rugbyArticles.push(rugbyArticle);
      },

      allArticles: function () {
        return rugbyArticles;
      },

      selectArticle: function (index) {
        return rugbyArticles[index];
      }
    };
  };

  exports.ArticleList = ArticleList
})(this);
