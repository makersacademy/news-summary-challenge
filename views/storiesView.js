'use strict';

(function(exports) {
  function storiesView(stories) {
    this._stories = stories;
  };

  storiesView.prototype._getStories = function() {
    return this._stories.all();
  };

  storiesView.prototype._getViews = function() {
    var array = this._getStories();
    return array.map(function(s) { return s.toHTML() }).join('');
  };

  storiesView.prototype.toHTML = function() {
    return `<div class="stories">${this._getViews()}</div>`;
  };

  function getStoriesView(story) {
    return new storiesView(story);
  };

  exports.getStoriesView = getStoriesView;
})(this);
