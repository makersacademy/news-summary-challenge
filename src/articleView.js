(function(exports) {
  var ArticleView = function(article) {
    this.article = article
  }

  ArticleView.prototype.returnHTML = function() {
    var htmlString =
    '<div align=center>' +
      '<img src="' + this.article.getThumbnail() + '">' +
      '<h1>' + this.article.getHeadline() + '</h1>' +
      '<h4>' + this.article.getSummary() + '</h4>' +
      '<input type=button onclick=' + 'location.href="' + this.article.getUrl() + '" value="Read full article"/>' +
    '</div>'
    return htmlString
  }

  exports.ArticleView = ArticleView
})(this)
