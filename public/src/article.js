"use strict";

(function(exports) {
  function Article(id, sectionID, title, imageURL) {
   	this._id = id;
    this._sectionID = sectionID
   	this._articleTitle = title
    this._imageURL = imageURL
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

  Article.prototype.getImageURL = function () {
    return this._imageURL;
  }

  exports.Article = Article
})(this)
