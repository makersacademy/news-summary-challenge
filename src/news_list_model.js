(function(exports) {
  function NewsListModel() {
    this.list = []
  }

  NewsListModel.prototype.AddNewsArticle = function(news) {
    this.list.push(news)
  }
  
  exports.NewsListModel = NewsListModel
})(this);
