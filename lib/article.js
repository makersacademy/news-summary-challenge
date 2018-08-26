
'use strict';
(function(exports) {

  function Article(headline, content, url, date, thumbnail, image) {
    this._headline = headline;
    this._content = content;
    this._url = url;
    this._date = date;
    this._thumbnail = thumbnail;
    this._image = image;
    this._id = 0;
  };

  Article.prototype = {
    headline: function() {
      return this._headline;
    },

    content: function() {
      return this._content;
    },

    url: function() {
      return this._url;
    },

    date: function() {
      return this._date;
    },

    thumbnail: function() {
      return this._thumbnail;
    },

    image: function() {
      return this._image;
    },

    id: function() {
      return this._id;
    },

  };

  exports.Article = Article;
})(this);
