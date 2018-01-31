(function(exports) {

  var id = 0

  function Headline(webTitle, webUrl, thumbnail) {
    this.title = webTitle;
    this.url = webUrl;
    this.thumbnail = thumbnail;
    this.id = id++;
  };

  Headline.prototype.getTitle = function() {
    return this.title;
  };

  Headline.prototype.getURL = function() {
    return this.url;
  };

  Headline.prototype.getThumbnail = function() {
    return this.thumbnail;
  };

  exports.Headline = Headline;
})(this);
