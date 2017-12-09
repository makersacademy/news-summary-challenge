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

  Article.prototype = {
    headline: function() {
      return this._headline;
    },

    body: function() {
      return this._body;
    },

    url: function() {
      return this._url;
    },

    date: function() {
      return this._date;
    },

    thumbImage: function() {
      return this._thumbImage;
    },

    mainImage: function() {
      return this._mainImage;
    },

    id: function() {
      return this._id;
    },
  }

  exports.Article = Article;
})(this);
