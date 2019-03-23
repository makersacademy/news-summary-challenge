(function(context) {

  function NewsItemList() {
    this._newsItems = [];
  }

  NewsItemList.prototype.addItem = function(newsItem) {
    this._newsItems.push(newsItem);
  }

  NewsItemList.prototype.getItems = function() {
    return this._newsItems;
  }

  context.NewsItemList = NewsItemList;
})(this);