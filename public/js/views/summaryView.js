(function(exports) {
  function SummaryView(article) {
    this.article = article
  }

  SummaryView.prototype = {
    displayArticle: function() {
      var headline = this.article.headline
      var image = this.article.image
      var summary = this.article.summary
      var URL = this.article.URL
      return `<div id='summary'><img src=${image}><br><div id='summary-header'>${headline}</div><br><div id='body'>${summary}</div><a href=${URL}>View Full Article Here</a></div>`
    }
  }

  exports.SummaryView = SummaryView
})(this)