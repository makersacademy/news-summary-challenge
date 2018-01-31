(function(exports) {

  var id = 0

  function ArticleID(webTitle, webUrl) {
    this.headline = webTitle;
    this.url = webUrl;
    this.id = id++;
  };

  ArticleID.prototype.getHeadline = function() {
    return this.headline;
  };

  ArticleID.prototype.getURL = function() {
    return this.url;
  };

  exports.ArticleID = ArticleID;
})(this);
