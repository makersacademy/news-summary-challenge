"use strict";

(function(exports) {
  function NewsModel() {
  this._articleId = 1;
  this.newsArray = [];
  };

  NewsModel.prototype = {

    addArticle: function(title, fullText) {
      var id = this._articleId
      this._articleId++
      var article = {'id': id, 'title': title,'text': fullText}
      this.newsArray.push(article)
    },

    returnArticle: function (id) {
      var findArticle = function(article) {
        return article['id'] == id 
      }
      var result = this.newsArray.find(findArticle)
      return result
    }

  };

  exports.NewsModel = NewsModel;
})(this);
