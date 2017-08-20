(function(exports) {
  "use strict";

  var id = 0;

  function Story(text, title, url) {
    this._text = text;
    this._title = title;
    this._url = url;
  }

  Story.prototype = {
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

  exports.Story = Story;
})(this);
