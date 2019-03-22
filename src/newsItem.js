(function(context) {

  function NewsItem(headline, article, image_url) {
    this._headline = headline;
    this._article = article;
    this._image_url = image_url;
  }

  NewsItem.prototype.article = function() {
    return 'Theresa May has given-up. Rejoice!';
  }

  context.NewsItem = NewsItem;
})(this);