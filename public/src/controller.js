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

    setTimeout(function(){
      var rugbyArticles = articleList.allArticles();
      var view = new View(rugbyArticles);
    }, 1000);

  };

  exports.Controller = Controller;
})(this);
