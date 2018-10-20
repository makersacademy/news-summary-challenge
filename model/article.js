'use strict';

(function(exports) {

  function Article(headline, body, id, date) {
    this.headline = headline
    this.body = body
    this.id = id
    this.date = date
  }

  Article.prototype.returnHeadline = function() {
    return this.headline
  }

  Article.prototype.returnBody  = function() {
    return this.body
  }

  Article.prototype.returnDate = function() {
    return this.date
  }

  exports.Article = Article
})(this)
