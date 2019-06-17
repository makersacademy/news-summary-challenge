(function(exports) {
  function NewsStoryList() {
    this._stories = [];
  };

  NewsStoryList.prototype.addStory = function(story) {
    this._stories.push(story);
  };

  NewsStoryList.prototype.viewAll = function() {
    this._stories.forEach(function(i) {
      return i._headline;
    });
  };
  
  exports.NewsStoryList = NewsStoryList;
})(this);
