'use strict';

(function(exports) {
  function NewsArticle(headline, id) {
    this.headline = headline;
    this.id = id;
  }

  NewsArticle.prototype.viewHeadline = function() {
    return this.headline;
  }

  exports.NewsArticle = NewsArticle;
})(this)
