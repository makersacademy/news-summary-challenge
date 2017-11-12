(function(exports) {
  function NewsControllerModel (NewsListModel, NewsListViewModel, element) {
    this._newsList = new NewsListModel(NewsStoryModel);
    this._newsListView = new NewsListViewModel(this._newsList);
    this.renderHTML(element);
  }

  NewsControllerModel.prototype.getNewsList = function () {
    return this._newsList;
  };

  NewsControllerModel.prototype.getNewsListView = function () {
    return this._newsListView;
  };

  NewsControllerModel.prototype.renderHTML = function (element) {
    element.innerHTML = this.getNewsListView().toHTML();
  };

  exports.NewsControllerModel = NewsControllerModel;
}(this));
