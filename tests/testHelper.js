// Story Model
(function(exports) {
  "use strict";

  var id = 0;

  function StoryMock(text, title, url) {
    this._text = text;
    this._title = title;
    this._url = url;
  }

  StoryMock.prototype = {
    text: function() {
      return this._text;
    },
    title: function() {
      return this._title;
    },
    id: function() {
      return id ++;
    },
    url: function() {
      return this._url;
    }
  };

  exports.StoryMock = StoryMock;
})(this);
