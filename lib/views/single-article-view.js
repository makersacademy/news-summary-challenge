(function(exports) {
  function SingleArticleView(article) {
    this.article = article;
  }

  SingleArticleView.prototype = {
    returnHTML: function() {
      var html = `<div>${this.article.showContent()}</div>`
      return html
    }
  }
  exports.SingleArticleView = SingleArticleView;
})(this)