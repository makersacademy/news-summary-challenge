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

  exports.Stories = Stories;
})(this);
