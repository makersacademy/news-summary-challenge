(function(exports) {

  exports.PromoListModel = function() {
    var _articles = [];

    var articles = function() {
      return _articles;
    }

    var addArticle = function(article) {
      _articles.push(article);
    }

    return {
      articles: articles,
      addArticle: addArticle
    };
  };

})(this);
