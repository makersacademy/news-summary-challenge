'use strict';

(function(exports) {
  try {
    var storyModule = require('./story');
    var story = storyModule.story;
  }
  catch(error) {
    var story = exports.story;
  };

  function Stories(storyProto = story) {
    this._storyProto = storyProto;
    this._list = [];
  };

  Stories.prototype.add = function(data) {
    var story = this._storyProto(data);
    this._list.push(story);
  };

  Stories.prototype.all = function() {
    return this._list;
  };

  Stories.prototype.get = function(title) {
    for (var index = 0; index < this._list.length; index++) {
      var story = this._list[index];
      if (story.title() == title) {
        return story;
      };
    };
  };

  exports.Stories = Stories;
})(this);
