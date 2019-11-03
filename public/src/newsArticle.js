"use strict";

(function(exports) {
  function NewsArticle(text) {

    var newsArticle = text;

    return {
      returnNewsArticle: function(){
        return newsArticle
      }
    };
  };
  exports.NewsArticle = NewsArticle;
})(this);
