(function(exports) {
  var id = 0

  function News(webTitle, webUrl, summary) {
    this.webTitle = webTitle
    this.webUrl = webUrl
    this.summary = summary
    id++
    this.id = id
  }

  News.prototype.displayWebTitle = function() {
    return this.webTitle;
  };

  News.prototype.displayWebUrl = function() {
    return this.webUrl;
  };

  News.prototype.displaySummary = function() {
    return this.summary;
  };


  exports.News = News

})(this);
