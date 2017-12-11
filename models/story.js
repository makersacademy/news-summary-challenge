'use strict';

(function(exports) {
  var limit = 320;

  function Story(data) {
    this._title = data.title;
    this._desc = data.description;
    this._img = data.image;
    this._date = new Date(data.date);
    this._link = data.link;
  };

  Story.prototype.setDesc = function(desc) {
    this._desc = desc;
  };

  Story.prototype.title = function() {
    return this._title;
  };

  Story.prototype.desc = function() {
    return this._desc;
  };

  Story.prototype.preview = function() {
    if (this._desc.length > limit) {
      return this._desc.slice(0, limit - 3) + '...';
    } else {
      return this._desc;
    };
  };

  Story.prototype.img = function() {
    return this._img;
  };

  Story.prototype.date = function() {
    return this._date.toDateString();
  };

  Story.prototype.link = function() {
    return this._link;
  };

  function story(...args) {
    return new Story(...args);
  };

  exports.story = story;
})(this);
