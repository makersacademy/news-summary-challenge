(function(exports) {
  function ArticleView(article = new Article) {
    this.article = article
  }

  ArticleView.prototype.returnHTMLstring = function() {
    let string = '<ul><li><div>' + this.article.heading + '</div></li></ul>'
    return string
  }

  exports.ArticleView = ArticleView
})(this)
