"use strict";

(function (exports) {

  function ArticleList() {
    this._articles = [];
  };

  ArticleList.prototype.getArticles = function() {
    return this._articles;
  };

  ArticleList.prototype.addArticle = function(id, sectionID, title, imageURL, body, constructor = Article) {
    this._articles.push(new constructor(id, sectionID, title, imageURL, body));
  };

  exports.ArticleList = ArticleList;

})(this);
