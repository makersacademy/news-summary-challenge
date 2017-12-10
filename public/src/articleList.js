"use strict";

(function (exports) {

  function ArticleList() {
    this._articles = [];
  };

  ArticleList.prototype.getArticles = function() {
    return this._articles;
  };

  ArticleList.prototype.addArticle = function(id, sectionID, title, imageURL, constructor = Article) {
    this._articles.push(new constructor(id, sectionID, title, imageURL));
  };

  exports.ArticleList = ArticleList;

})(this);
