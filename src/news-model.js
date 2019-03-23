(function(exports) {
  var id = 0;

  function News(title, body, url, thumbnail, date) {
    this.title = title;
    this.body = body;
    this.url = url;
    this.thumbnail = thumbnail,
    this.date = date;
    id++;
    this.id = id;
  }

  exports.News = News;
})(this);