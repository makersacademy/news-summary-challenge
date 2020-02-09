"use strict";

function NewsModel() {
  this._articleId = 1;
  this.newsArray = [];
}

NewsModel.prototype = (function(exports) {

  function addArticle(title, fullText) {
    var id = this._articleId
    this._articleId++
    var article = {'id': id, 'title': title,'text': fullText}
    this.newsArray.push(article)
  };

  function returnArticle(id) {
    var findArticle = function(article) {
      return article['id'] == id 
    }
    var result = this.newsArray.find(findArticle)
    return result
  };

  return {
    addArticle: addArticle, returnArticle: returnArticle
  };

})();