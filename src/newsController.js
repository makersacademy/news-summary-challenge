(function(context) {

  function NewsController(newsItemList) {
    this._newsItemList = newsItemList;
    this._newsListView = new NewsListView(newsItemList);
  }

  NewsController.prototype.addNewsItem = function() {

  }

  NewsController.prototype.renderNewsToHTML = function() {
    console.log('controller is calling for api items...');
    this._newsItemList.getNewsItemsFromAPI();
    document.getElementById('app').innerHTML = this._newsListView.toHTML();
  }

  NewsController.prototype.renderSingleNewsItemView = function(newsItemView) {
    document.getElementById('app').innerHTML = newsItemView.toHTML();
  }

  context.NewsController = NewsController;

})(this);