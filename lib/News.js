var NEWSMODULE= (function(exports) {
  exports.News = News;
  function News(title, url, summary, thumbnail) {
    this.title = title;
    this.url = url;
    this.summary = summary;
    this.thumbnail = thumbnail;
  };

  return exports;
})(this);
