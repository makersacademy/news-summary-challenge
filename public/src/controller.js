"use strict";

(function (exports) {

  function Controller(articleData) {
    articleData.forEach(function(article, index) {
      var webTitle = article.webTitle
      var webUrl = article.webUrl
      var id = index
      var rugbyArticle = new RugbyArticle(webTitle, webUrl, id)
      console.log(rugbyArticle)
    });
  };

  exports.Controller = Controller;
})(this);
