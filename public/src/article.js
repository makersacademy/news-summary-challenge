"use strict";

(function(exports) {
  function Article(id, sectionID, title, imageURL, body) {
   	this._id = id;
    this._sectionID = sectionID;
   	this._articleTitle = title;
    this._imageURL = imageURL;
    this._body = body
  };

  Article.prototype.getId = function () {
  	return this._id;
  }

  Article.prototype.getSectionId = function () {
  	return this._sectionID;
  }

  Article.prototype.getArticleTitle = function () {
    return this._articleTitle;
  }

  Article.prototype.getImageURL = function () {
    return this._imageURL;
  }

  Article.prototype.getBody = function () {
    return this._body;
  }

  exports.Article = Article;
})(this);
