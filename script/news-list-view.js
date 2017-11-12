(function(exports) {
  function NewsListViewModel (newsListModel) {
    this._newsList = newsListModel;
  }

  NewsListViewModel.prototype.getNewsList = function () {
    return this._newsList;
  };

  NewsListViewModel.prototype.toHTML = function () {
    return this._newsList.getNewsStories().map(function (story, index) {
      return '<a id="headline' + index +'" href="/#/story/' + index +'">' +
      story.getHeadline() +
      '</a><img id="image' + index +'" src="' +
      story.getImgUrl() +
      '"><div id="summary' + index +'">' +
      story.getSummary() +
      '</div>';
    }).join("");
  };

  exports.NewsListViewModel = NewsListViewModel;
}(this));
