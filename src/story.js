"use strict";

;(function(exports)  {

function Story(storyHash) {
  this._headline = storyHash.webTitle;
  this._webUrl = storyHash.webUrl;
  this._thumbnail = storyHash.fields.thumbnail;

}

Story.prototype.getHeadline = function() {
  return this._headline;
};

Story.prototype.getThumbnail = function() {
  return this._thumbnail;
};

Story.prototype.getWebUrl = function() {
  return this._webUrl;
}

exports.Story = Story;

})(this);
