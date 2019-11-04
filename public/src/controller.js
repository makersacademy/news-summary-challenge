"use strict";

(function (exports) {

  function Controller(articleData) {

    var articleList = new ArticleList

    articleData.forEach(function(article, index) {
      var webTitle = article.webTitle;
      var webUrl = article.webUrl;
      var id = index;
      var rugbyArticle = new RugbyArticle(webTitle, webUrl, id);
      articleList.addArticle(rugbyArticle);
    });

    console.log(articleList.allArticles());
  };

  exports.Controller = Controller;
})(this);
