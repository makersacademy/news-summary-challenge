
(function(exports) {
  function NewsListModel (newsStory = NewsStoryModel) {
    this._newsStories = [new newsStory(), new newsStory(), new newsStory()];
  }

  NewsListModel.prototype.getNewsStories = function () {
    return this._newsStories;
  };

  exports.NewsListModel = NewsListModel;
}(this));
