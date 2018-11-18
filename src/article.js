(function(exports) {
  function Article(headline, id, url, imgUrl) {
    this.headline = headline;
    this.id = id;
    this.url = url;
    this.imgUrl = imgUrl
  }
  exports.Article = Article;
})(this);
