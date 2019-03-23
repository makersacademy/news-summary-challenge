(function(context) {

  function NewsItem(headline, article, image_url) {
    this._headline = headline;
    this._article = article;
    this._image_url = image_url;
  }

  NewsItem.prototype.article = function() {
    return 'Theresa May has given-up. Rejoice!';
  }

  NewsItem.prototype.headline = function() {
    return 'Brexit Cancelled';
  }

  NewsItem.prototype.image_url = function() {
    return 'images/brexit.jpeg';
  }

  context.NewsItem = NewsItem;
})(this);