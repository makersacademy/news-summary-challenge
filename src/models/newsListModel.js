'use strict';

(function(exports) {
  function NewsList() {
    this.list = [];
  }

  NewsList.prototype.addArticle = function(headline) {
    var id = this.list.length;
    var article = new NewsArticle(headline, id);
    this.list.push(article);
  }

  NewsList.prototype.viewList = function() {
    return this.list;
  }



  exports.NewsList = NewsList;
})(this)
