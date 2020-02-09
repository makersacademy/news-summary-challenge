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
  }

  return {
    addArticle: addArticle
  };

})();