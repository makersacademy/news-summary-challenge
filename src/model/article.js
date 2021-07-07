'use strict';

(function(exports) {

function Article(headline, id, date, link, image) {
  this._headline = headline
  this._id = id 
  this._date = date
  this._link = link
  this._image = image
};

Article.prototype.returnHeadline = function() {
  return this._headline
};

Article.prototype.returnArticleId = function() {
  return this._id
};

Article.prototype.returnArticleDate = function() {
  return this._date
};

Article.prototype.returnArticleLink = function() {
  return this._link
};

Article.prototype.returnArticleImage = function() {
  return this._image
};

exports.Article = Article
})(this);



