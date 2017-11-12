(function(exports) {
  function NewsListViewModel (newsListModel) {
    this._newsList = newsListModel;
  }

  NewsListViewModel.prototype.getNewsList = function () {
    return this._newsList;
  };

  NewsListViewModel.prototype.toHTML = function () {

  };

  exports.NewsListViewModel = NewsListViewModel;
}(this));
