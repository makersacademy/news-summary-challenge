(function(exports) {

  function ArticleSummary(headline, summary) {
    this.headline = headline;
    this.summary = summary;
  };

  ArticleSummary.prototype.getHeadline = function() {
    return this.headline;
  };

  ArticleSummary.prototype.getSummary = function() {
    return this.summary;
  };

  exports.ArticleSummary = ArticleSummary;
})(this);
