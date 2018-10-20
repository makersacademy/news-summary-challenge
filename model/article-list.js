'use strict';

(function(exports) {
  function ArticleList() {
    this.list = []
  }

 ArticleList.prototype.create = function(headline) {
   var article = new Article(headline)
   this.list.push(article)
 }

 ArticleList.prototype.showAll = function() {
   return this.list
 }
 
  exports.ArticleList = ArticleList
})(this)
