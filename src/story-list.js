(function(exports) {
  "use strict";

  function StoryList(storymodel) {
    this._stories = [];
    this._storymodel = storymodel;
  }

  StoryList.prototype = {
    all: function() {
      return this._stories;
    },
    create: function(text, title, url) {
      this._stories.push(new this._storymodel(text, title, url));
    }
  };

  exports.StoryList = StoryList;
})(this);
