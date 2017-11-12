
(function(exports) {
  function NewsListModel (NewsStoryModel) {
    this._newsStories = [new NewsStoryModel(), new NewsStoryModel(), new NewsStoryModel()];
  }

  NewsListModel.prototype.getNewsStories = function () {
    return this._newsStories;
  };

  exports.NewsListModel = NewsListModel;
}(this));
