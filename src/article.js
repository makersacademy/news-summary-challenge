(function(exports) {
  function Article(url, headline, text, thumbnail) {
    this.id;
    this.url = url;
    this.headline = headline;
    this.text = text;
    this.thumbnail = thumbnail;
    this.summary;
  }

  exports.Article = Article
})(this);
