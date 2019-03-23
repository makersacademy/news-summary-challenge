(function(context) {

  function NewsListView(newsItemList) {
    this._newsItemList = newsItemList;
    console.log('THE LIST IN THE NLV: ' + this._newsItemList);
  }

  NewsListView.prototype.getList = function() {
    return this._newsItemList;
  }

  NewsListView.prototype.toHTML = function() {

    var newsHTML = '';
    
    this._newsItemList.getItems().forEach(item => {
      newsHTML += '<div class="newsItem"><a href="#newsItem/' + item.id() + '"><img class="" src="' + item.image_url() + '"><h1 class="headline">' + item.headline() + '</h1></a></div>';
    });

    return newsHTML;
  }

  context.NewsListView = NewsListView;
})(this);