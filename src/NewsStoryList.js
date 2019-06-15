(function(exports) {
  function NewsStoryList() {
    this._stories = [];
  };

  NewsStoryList.prototype.addStory = function(story) {
    this._stories.push(story);
  };

// view all is currently printing Headline 1 and Story 2?
  NewsStoryList.prototype.viewAll = function() {
    for (var i = 0; i < this._stories.length; ++i) {
      return this._stories[i];
    };
  };

  exports.NewsStoryList = NewsStoryList;
})(this);
