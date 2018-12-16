(function(exports) {
  var id = 0

  function News(headline, summary) {
    this.summary = summary
    this.headline = headline
    id++
    this.id = id
  }

  exports.News = News

})(this);
