(function(exports) {
  "use strict";

  function StoryList(storymodel) {
    this._stories = [];
    this._storymodel = storymodel;
    this._idincrementor = 0;
  }

  StoryList.prototype = {
    all: function() {
      return this._stories;
    },
    create: function(text, title, url) {
      var id = this._idincrementor;
      this._stories.push(new this._storymodel(text, title, url, id));
      this._idincrementor ++;
    }
  };

  exports.StoryList = StoryList;
})(this);
