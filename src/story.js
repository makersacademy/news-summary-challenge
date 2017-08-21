(function(exports) {
  "use strict";

  function Story(text, title, url, id) {
    this._text = text;
    this._title = title;
    this._url = url;
    this._id = id;
  }

  Story.prototype = {
    text: function() {
      return this._text;
    },
    title: function() {
      return this._title;
    },
    id: function() {
      return this._id;
    },
    url: function() {
      return this._url;
    }
  };

  exports.Story = Story;
})(this);
