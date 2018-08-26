'use strict';

(function(exports) {
  function NewsStory(headline, thumbnail, date, url, content, image) {
    this._headline = headline;
    this._thumbnail = thumbnail;
    this._date = date;
    this._url = url;
    this._content = content; 
    this._image = image;
    this._id = 0;
  };

  NewsStory.prototype = {
    headline: function() { return this._headline; },

    thumbnail: function() { return this._thumbnail; },

    date: function() { return this._date; },

    url: function() { return this._url; },

    content: function() { return this._content; },

    image: function() { return this._image; },

    id: function() { return this._id; },
  };

  exports.NewsStory = NewsStory;
})(this);
