(function(context) {

  function NewsController(newsItemList) {
    this._newsItemList = newsItemList;
    this._newsListView = new NewsListView(newsItemList);
  }

  NewsController.prototype.addNewsItem = function() {

  }

  NewsController.prototype.renderNewsToHTML = function() {
    console.log('LIST: ' + this._newsListView.getList().getItems());
    document.getElementById('app').innerHTML = this._newsListView.toHTML();
  }

  context.NewsController = NewsController;

})(this);