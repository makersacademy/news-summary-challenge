"use strict";

(function (exports) {
  function ArticleList () {
    var rugbyArticles = []

    return {
      addArticle: function (rugbyArticle) {
        rugbyArticles.push(rugbyArticle);
        //this.assignId();
      },

      allArticles: function () {
        return rugbyArticles;
      },

      selectArticle: function (index) {
        return rugbyArticles[index];
      },

      // assignId: function () {
      //   var i = 0
      //   rugbyArticles.map(function (article) {
      //     article.id = i;
      //     i++
      //   });
      // }
    };
  };

  exports.ArticleList = ArticleList
})(this);
