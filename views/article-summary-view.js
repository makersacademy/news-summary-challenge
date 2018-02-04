(function(exports) {
  function ArticleSummaryView(articleSummary) {
    this.articleSummary = articleSummary;
  };

  ArticleSummaryView.prototype.createHtmlString = function() {
    return "<h1><a href='" + this.articleSummary
    .getHeadline()
    .getURL() + "'>" + this.articleSummary
    .getHeadline()
    .getTitle() + "<img src=" + this.articleSummary
    .getHeadline()
    .getThumbnail() + "></a></h1><p>" + this.articleSummary
    .getSummary()
    .map(function(sentence) { return sentence })
    .join(" ") + "</p>"
  };

  exports.ArticleSummaryView = ArticleSummaryView;
})(this);
