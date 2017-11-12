(function(exports) {
  function NewsListViewModel (newsListModel) {
    this._newsList = newsListModel;
  }

  NewsListViewModel.prototype.getNewsList = function () {
    return this._newsList;
  };

  NewsListViewModel.prototype.toHTML = function () {
    return this._newsList.getNewsStories().map(function (story, index) {
      return '<h2 id="headline' + index +'">' +
      story.getHeadline() +
      '</h2><img id="image' + index +'" src="' +
      story.getImgUrl() +
      '"><div id="summary' + index +'">' +
      story.getSummary() +
      '</div>';
    }).join("");
  };

  exports.NewsListViewModel = NewsListViewModel;
}(this));
