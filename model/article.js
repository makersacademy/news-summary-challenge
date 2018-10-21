'use strict';

(function(exports) {

  function Article(headline, id, date, link, image) {
    this.headline = headline
    this.id = id
    this.date = date
    this.link = link
    this.image = image
  }

  Article.prototype.returnHeadline = function() {
    return this.headline
  }

  Article.prototype.returnDate = function() {
    return this.date
  }

  Article.prototype.returnLink = function() {
    return this.link
  }

  exports.Article = Article
})(this)
