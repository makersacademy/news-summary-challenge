'use strict';
(function(exports) {

  function Article(headline, body, url, date, thumbImage, mainImage) {
    this._headline = headline;
    this._body = body;
    this._url = url;
    this._date = date;
    this._thumbImage = thumbImage;
    this._mainImage = mainImage;
    this._id = 0;
  };

  Article.prototype.headline = function () {
    return this._headline;
  };

  Article.prototype.body = function () {
    return this._body;
  };

  Article.prototype.url = function () {
    return this._url;
  };

  Article.prototype.date = function () {
    return this._date;
  };

  Article.prototype.thumbImage = function () {
    return this._thumbImage;
  };

  Article.prototype.mainImage = function () {
    return this._mainImage;
  };

  Article.prototype.id = function () {
    return this._id;
  };

  exports.Article = Article;
})(this);
