'use strict';
(function(exports) {

  function Article(headline, content, addr, date, thumbImage, mainImage) {
    this._headline = headline;
    this._content = content;
    this._addr = addr;
    this._date = date;
    this._thumbImage = thumbImage;
    this._mainImage = mainImage;
    this._id = 0;
  };

  Article.prototype = {
    headline: function() {
      return this._headline;
    },

    content: function() {
      return this._content;
    },

    addr: function() {
      return this._addr;
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
  };

  exports.Article = Article;
})(this);
