(function(context) {

  function NewsItemList() {
    this._newsItems = [];
  }

  NewsItemList.prototype.addItem = function(newsItem) {
    this._newsItems.push(newsItem);
  }

  context.NewsItemList = NewsItemList;
})(this);