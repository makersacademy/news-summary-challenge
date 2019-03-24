// a single article's view

(function(context) {

  function NewsItemView(newsItem) {
    this._newsItem = newsItem;
  }

  NewsItemView.prototype.toHTML = function() {
    return '<div class="newsItem"><img class="" src="' + newsItem.image_url() + '"><h1 class="headline">' + newsItem.headline() + '</h1><p>' + newsItem.article() + '</p></div>';
  }

  context.NewsItemView = NewsItemView;
})(this);