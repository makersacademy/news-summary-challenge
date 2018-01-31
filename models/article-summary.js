(function(exports) {

  function ArticleSummary(webTitle, webUrl, summary) {
    this.headline = webTitle;
    this.url = webUrl;
    this.summary = summary;
  };

  ArticleSummary.prototype.getHeadline = function() {
    return this.headline;
  };

  ArticleSummary.prototype.getURL = function() {
    return this.url;
  };

  ArticleSummary.prototype.getSummary = function() {
    return this.summary;
  }

  exports.ArticleSummary = ArticleSummary;
})(this);
