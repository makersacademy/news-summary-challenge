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

  NewsStory.prototype.headline = function() { return this._headline; }

  NewsStory.prototype.thumbnail = function() { return this._thumbnail; }

  NewsStory.prototype.date = function() { return this._date; }

  NewsStory.prototype.url = function() { return this._url; }

  NewsStory.prototype.content = function() { return this._content; }

  NewsStory.prototype.image = function() { return this._image; }

  NewsStory.prototype.id = function() { return this._id; }

  exports.NewsStory = NewsStory;
})(this);
