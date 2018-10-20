'use strict';

(function(exports) {

  function Article(headline) {
    this.headline = headline
  }

  Article.prototype.returnHeadline = function() {
    return this.headline
  }

  exports.Article = Article
})(this)
