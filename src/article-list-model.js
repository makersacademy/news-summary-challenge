(function(exports) {
  'use strict';

  function ArticleList(articleModel) {
    this._articles = [];
    this._article = articleModel;
  }

  ArticleList.prototype = {
    articles: function() {
      return this._articles;
    },
    add: function(headline, image, summary, articleURL) {
      this._articles.push(new this._article(headline, image, summary, articleURL))
    }
  }

  // ArticleList.prototype.articles = function () {
  // };

  exports.ArticleList = ArticleList;
}(this));
