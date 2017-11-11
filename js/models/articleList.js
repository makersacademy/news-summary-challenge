'use strict';

(function (exports) {
  exports.ArticleList = function () {

    articles = [];

    function allArticles() {
      return articles;
    }

    function addArticle(headline, summary, url, image) {
      article = new Article(headline, summary, url, image)
      articles.push(article);
    }
    return {
      allArticles: allArticles,
      addArticle: addArticle
    }

    var articles, article;
  }
})(this);