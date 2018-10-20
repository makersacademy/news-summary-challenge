'use strict';

(function(exports) {
  function ArticleList() {
    this.list = []
    this.idCounter = 0
  }

 ArticleList.prototype.create = function(headline, date, url) {
   var article = new Article(headline, this.idCounter, date, url)
   this.idCounter++
   this.list.push(article)
 }

 ArticleList.prototype.showAll = function() {
   return this.list
 }

  exports.ArticleList = ArticleList
})(this)
