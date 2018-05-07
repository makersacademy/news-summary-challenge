var NEWSMODULE= (function(exports) {
  exports.News = News;
  function News(title, url, summary, thumbnail, id) {
    this.title = title;
    this.url = url;
    this.summary = summary;
    this.thumbnail = thumbnail;
    this.id = id;
  };

  return exports;
})(this);
