'use strict';

(function(exports) {
  function NewsArticle(headline, id) {
    this.headline = headline;
    // this.image = image;
    // this.body = body;
    this.id = id;
  }

  NewsArticle.prototype.viewHeadline = function() {
    return this.headline;
  }

  exports.NewsArticle = NewsArticle;
})(this)
