(function(exports) {
  function News(title, url, summary, image, id) {
    this.title = title
    this.url = url
    this.summary = summary
    this.image = image
    this.id = id
  }

  exports.News = News
})(this);
