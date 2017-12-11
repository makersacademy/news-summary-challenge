'use strict';

(function(exports) {
  try {
    var storyViewModule = require('./storyView');
    var getStoryView = storyViewModule.getStoryView;
  }
  catch(error) {
    var getStoryView = exports.getStoryView;
  };

  function storiesView(stories, viewFunc = getStoryView) {
    this._stories = stories;
    this._viewFunc = viewFunc;
  };

  storiesView.prototype._getStories = function() {
    return this._stories.all();
  };

  storiesView.prototype._getViews = function() {
    var self = this;
    var convert = function(s) {
      return self._viewFunc(s).toHTML()
    };
    return this._getStories().map(convert).join('');
  };

  storiesView.prototype.toHTML = function() {
    return `<div class="stories">${this._getViews()}</div>`;
  };

  function getStoriesView(...args) {
    return new storiesView(...args);
  };

  exports.getStoriesView = getStoriesView;
})(this);
