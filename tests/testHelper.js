// StoryModelMock
(function(exports) {
  "use strict";

  var id = 0;

  function StoryModelMock(text, title, url) {
    this._text = text;
    this._title = title;
    this._url = url;
  }

  StoryModelMock.prototype = {
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

  exports.StoryModelMock = StoryModelMock;
})(this);

// StoryListModelMock
(function(exports) {
  "use strict";

  function StoryListModelMock(storymodel) {
    this._stories = [];
    this._storymodel = storymodel;
  }

  StoryListModelMock.prototype = {
    all: function() {
      return this._stories;
    },
    create: function(text, title, url) {
      this._stories.push(new this._storymodel(text, title, url));
    }
  };

  exports.StoryListModelMock = StoryListModelMock;
})(this);
