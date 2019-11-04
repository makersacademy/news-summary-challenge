"use strict";

(function (exports) {

  function Controller(articleData) {
    articleData.forEach(function(article, index) {
      console.log(article.webTitle)
      console.log(article.webUrl)
    });
  };

  exports.Controller = Controller;
})(this);
