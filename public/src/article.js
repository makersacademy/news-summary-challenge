"use strict";

(function(exports) {
  function Article(id, sectionID, title) {
   	this._id = id;
    this._sectionID = sectionID
   	this._articleTitle = title
  }

  Article.prototype.getId = function () {
  	return this._id;
  }

  Article.prototype.getSectionId = function () {
  	return this._sectionID;
  }

  Article.prototype.getArticleTitle = function () {
    return this._articleTitle;
  }

  exports.Article = Article
})(this)
