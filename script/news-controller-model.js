(function(exports) {
  function NewsControllerModel (NewsListModel, NewsListViewModel) {
    this._newsList = new NewsListModel();
    this._newsListView = new NewsListViewModel(this._newsList);
  }

  NewsControllerModel.prototype.getNewsList = function () {
    return this._newsList;
  };

  NewsControllerModel.prototype.getNewsListView = function () {
    return this._newsListView;
  };

  exports.NewsControllerModel = NewsControllerModel;
}(this));
