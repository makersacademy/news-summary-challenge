"use strict";

(function (exports) {
  function NewsList () {
    var newsArticles = []

    return {
      addArticle: function (newsArticle) {
        return newsArticles.push(newsArticle);
      },

      allArticles: function () {
        return newsArticles;
      },

      selectArticle: function (index) {
        return newsArticles[index];
      }
    };
  };

  exports.NewsList = NewsList
})(this);
