(function(exports) {
  function ArticleView(articleSummary) {
    this.articleSummary = articleSummary;
  };

  ArticleView.prototype.createHtmlString = function(articleSummary) {
    var articleSummary = this.articleSummary
    return "<h1><a href='" + articleSummary.getURL() + "'>" + articleSummary.getHeadline() + "</a></h1>" + "<p>" + articleSummary.getSummary().sentences.map(function(sentence) { return sentence }).join(" ") + "</p>"
  };

  exports.ArticleView = ArticleView;
})(this);
