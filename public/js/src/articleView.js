(function(exports) {
  function ArticleView(article = new Article) {
    this.article = article
  }

  ArticleView.prototype.returnHTMLstring = function() {
    let string = '<ul><li><div>' + this.article.headline + '</div></li></ul>'
    // console.log(string)
    return string
  }

  exports.ArticleView = ArticleView
})(this)
