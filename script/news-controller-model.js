(function(exports) {
  function NewsControllerModel (newsList = NewsListModel) {
    this._newsList = new newsList();
  }

  NewsControllerModel.prototype.getNewsList = function () {
    return this._newsList;
  };

  exports.NewsControllerModel = NewsControllerModel;
}(this));
