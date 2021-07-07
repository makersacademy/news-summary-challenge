(function(exports) {
  function NewsStory(headline, story) {
    this._headline = headline
    this._story = story
  };

  NewsStory.prototype.viewHeadline = function() {
    return this._headline;
  };

  NewsStory.prototype.viewStory = function() {
    return this._story;
  };
  exports.NewsStory = NewsStory;
})(this);
