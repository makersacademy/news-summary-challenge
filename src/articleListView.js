(function(exports) {
  var ListView = function(list) {
    this.list = list
  }

  ListView.prototype.returnHTML = function() {
    var articles = this.list.getArticles()
    if (articles.length === 0) {
      return '<h1> No news to report! </h1>'
    } else {
      return this.addUltags(this.returnListItemsHTML())
    }
  }

  ListView.prototype.addUltags = function(htmlString) {
    return '<ul style="list-style:none">' + htmlString + '</ul>'
  }

  ListView.prototype.returnListItemsHTML = function() {
    articles = this.list.getArticles()
    var htmlString = ''
    for(var i=0;i<articles.length;i++) {
      htmlString += this.createArticleHTML(articles[i])
    }
    return htmlString
  }

  ListView.prototype.createArticleHTML = function(article) {
    var htmlString =
    '<li>' +
      '<div align=center>' +
        '<img src="' + article.getThumbnail() + '">' +
        '<h3>' + article.getHeadline() + '</h3>' +
        '<input type=button onclick=' + 'location.href="#article/' + article.getID() + '" value="Get Summary">' +
        '<input type=button onclick=' + 'location.href="' + article.getUrl() + '" value="Read full article"/>' +
      '</div>' +
    '</li>'
    return htmlString
  }

  exports.ListView = ListView
})(this)
