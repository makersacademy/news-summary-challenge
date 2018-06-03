(function(exports) {
  function NewsListModel() {
    this.list = []
  }

  NewsListModel.prototype.AddNewsArticle = function(news) {
    this.list.push(news)
  }

  NewsListModel.prototype.ReturnAllNews = function() {
    return this.list
  }

  exports.NewsListModel = NewsListModel
})(this);
