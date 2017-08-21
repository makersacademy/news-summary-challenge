// StoryModelMock
(function(exports) {
  "use strict";

  var id = 0;

  function StoryModelMock(text, title, url, id) {
    this._text = text;
    this._title = title;
    this._url = url;
    this._id = id;
  }

  StoryModelMock.prototype = {
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

  exports.StoryModelMock = StoryModelMock;
})(this);

// StoryListModelMock
(function(exports) {
  "use strict";

  function StoryListModelMock(storymodel) {
    this._stories = [];
    this._storymodel = storymodel;
    this._idincrementor = 0;
  }

  StoryListModelMock.prototype = {
    all: function() {
      return this._stories;
    },
    create: function(text, title, url) {
      var id = this._idincrementor;
      this._stories.push(new this._storymodel(text, title, url, id));
      this._idincrementor ++;
    }
  };

  exports.StoryListModelMock = StoryListModelMock;
})(this);
