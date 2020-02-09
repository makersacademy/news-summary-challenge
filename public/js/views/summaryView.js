(function(exports) {
  function SummaryView(article) {
    this.article = article
  }

  SummaryView.prototype.displayArticle = function() {
    return `<div><img src=${this.article.image}><br><div id='summary-header'>${this.article.headline}</div><br><div id='body'>${this.article.body}</div></div>`
  }

  exports.SummaryView = SummaryView
})(this)