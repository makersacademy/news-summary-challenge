(function(exports) {
  'use strict';

  exports.PromoListModel = function() {
    var _articles = [];

    var articles = function() {
      return _articles;
    };

    var addArticle = function(article) {
      _articles.push(article);
    };

    var getArticleById = function(id) {
      return _articles.filter(function(article) {
        return article.id() === parseInt(id);
      })[0];
    };

    return {
      articles: articles,
      addArticle: addArticle,
      getArticleById: getArticleById
    };
  };

})(this);
