(function(exports) {

  var id = 0

  function ArticleID(webTitle, webUrl, thumbnail) {
    this.headline = webTitle;
    this.url = webUrl;
    this.thumbnail = thumbnail;
    this.id = id++;
  };

  ArticleID.prototype.getHeadline = function() {
    return this.headline;
  };

  ArticleID.prototype.getURL = function() {
    return this.url;
  };

  ArticleID.prototype.getThumbnail = function() {
    return this.thumbnail;
  };

  exports.ArticleID = ArticleID;
})(this);
