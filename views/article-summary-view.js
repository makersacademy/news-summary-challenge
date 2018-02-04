(function(exports) {
  function ArticleSummaryView(articleSummary) {
    this.articleSummary = articleSummary;
  };

  ArticleSummaryView.prototype.createHtmlString = function() {
    return "<a href='" + this.articleSummary.getHeadline().getURL()
    + "'><img src=" + this.articleSummary.getHeadline().getThumbnail()
    + "><h1>" + this.articleSummary.getHeadline().getTitle() + "</h1></a><p>"
    + this.articleSummary.getSummary().map(function(sentence) { return sentence }).join(" ") + "</p>"
  };

  exports.ArticleSummaryView = ArticleSummaryView;
})(this);
