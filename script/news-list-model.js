
(function(exports) {
  function NewsListModel (NewsStoryModel) {
    this._newsStories = [new NewsStoryModel("Headline", "Summary", "https://i.pinimg.com/736x/8e/47/7f/8e477f4d1e001fecc0b1064ae7c58b70--photoshopped-animals-squirrels.jpg"), new NewsStoryModel("Headline", "Summary", "https://i.pinimg.com/736x/8e/47/7f/8e477f4d1e001fecc0b1064ae7c58b70--photoshopped-animals-squirrels.jpg"), new NewsStoryModel("Headline", "Summary", "https://i.pinimg.com/736x/8e/47/7f/8e477f4d1e001fecc0b1064ae7c58b70--photoshopped-animals-squirrels.jpg")];
  }

  NewsListModel.prototype.getNewsStories = function () {
    return this._newsStories;
  };

  exports.NewsListModel = NewsListModel;
}(this));
