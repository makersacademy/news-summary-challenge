(function(exports) {
  function NewsArticle(headline, url, imageUrl, id) {
    this.headline = headline;
    this.url = url;
    this.imageUrl = imageUrl;
    this.id = id;
  }

  exports.NewsArticle = NewsArticle;
})(this);
