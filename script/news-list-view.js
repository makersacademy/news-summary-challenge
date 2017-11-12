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

  NewsListViewModel.prototype.singleStoryHTML = function (id) {
    var story = this.getNewsList().getNewsStories()[parseInt(id)];
    return '<img id="image' + id +'" src="' + story.getImgUrl() + '">' +
      '<h2 id="headline' + id +'">' + story.getHeadline() + '</h2>' +
      '<div id="summary' + id +'">' + story.getSummary() + '</div>' +
      '<a href="/">Back</a>';
  };

  exports.NewsListViewModel = NewsListViewModel;
}(this));
