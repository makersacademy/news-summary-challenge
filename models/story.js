'use strict';

(function(exports) {
  function Story(title, description, image, date) {
    this._title = title;
    this._desc = description;
    this._img = image;
    this._date = new Date(date);
  };

  Story.prototype.title = function() {
    return this._title;
  };

  Story.prototype.desc = function() {
    return this._desc;
  };

  Story.prototype.img = function() {
    return this._img;
  };

  Story.prototype.date = function() {
    return this._date;
  };

  function story(title, description, image, date) {
    return new Story(title, description, image, date);
  };

  exports.story = story;
})(this);
