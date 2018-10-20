'use strict';

(function(exports) {
  function ArticleList() {
    this.list = []
    this.idCounter = 0
  }

 ArticleList.prototype.create = function(headline, body, date) {
   var article = new Article(headline, body, this.idCounter, date)
   this.idCounter++
   this.list.push(article)
 }

 ArticleList.prototype.showAll = function() {
   return this.list
 }

  exports.ArticleList = ArticleList
})(this)
