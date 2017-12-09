'use strict';

(function(exports) {
  var storyModule = require('./story');

  function Stories(storyProto = storyModule.story) {
    this._storyProto = storyProto;
    this._list = [];
  };

  Stories.prototype.add = function(...args) {
    var story = this._storyProto(...args);
    this._list.push(story);
  };

  Stories.prototype.all = function() {
    return this._list;
  };

  exports.Stories = Stories;
})(this);
