(function(exports) {
  var ArticleView = function(list) {
    this.list = list
  }

  ArticleView.prototype.returnHTML = function() {
    return this.addUltags(this.returnListItemsHTML())
  }

  ArticleView.prototype.addUltags = function(htmlString) {
    finalHTML = '<ul style="list-style:none">' + htmlString + '</ul>'
    return finalHTML
  }

  ArticleView.prototype.returnListItemsHTML = function() {
    articles = this.list.getArticles()
    var htmlString = ''
    for(var i=0;i<articles.length;i++) {
      htmlString += this.createArticleHTML(articles[i])
    }
    return htmlString
  }

  ArticleView.prototype.createArticleHTML = function(article) {
    var htmlString =
    '<li>' +
      '<div align=center>' +
        '<img src="' + article.getThumbnail() + '">' +
        '<h2>' + article.getHeadline() + '</h2>' +
        '<input type=button onclick=' + 'location.href="#article/' + article.getID() + '" value="Get Summary">' +
        '<input type=button onclick=' + 'location.href="' + article.getUrl() + '" value="Read full article"/>' +
      '</div>' +
    '</li>'
    return htmlString
  }

  exports.ArticleView = ArticleView
})(this)
