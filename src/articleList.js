'use strict';
(function(exports) {
function ArticleList() {
  this._articles = [];
};

ArticleList.prototype = {
  save: function(headline, body, url, date, thumbImage, mainImage) {
    var article = new Article(headline, body, url, date, thumbImage, mainImage);
    this._articles.push(article);
    var idnum = this._articles.length
    article._id = idnum;
    return this._articles;
  },

  articles: function() {
    return this._articles;
  },

  getArticleById: function(id) {
    for(var i = 0; i < this._articles.length; i++) {
      if(this._articles[i]._id === id) {
        return this._articles[i];
      }
    }
  }

}

exports.ArticleList = ArticleList;
})(this);
