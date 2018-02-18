(function(exports) {
  var ListView = function(list) {
    this.list = list
  }

  ListView.prototype.returnHTML = function() {
      return this.addUltags(this.returnListItemsHTML())
    }

    ListView.prototype.addUltags = function(htmlString) {
      finalHTML = '<ul style="list-style:none">' + htmlString + '</ul>'
      return finalHTML
    }

    ListView.prototype.returnListItemsHTML = function() {
      articles = this.list.listArticles()
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
          '<h2>' + article.getHeadline() + '</h2>' +
          '<input type=button onclick=' + 'location.href="#article/' + article.getID() + '" value="Get Summary">' +
          '<input type=button onclick=' + 'location.href="' + article.getUrl() + '" value="Read full article"/>' +
        '</div>' +
      '</li>'
      return htmlString
    }

  exports.ListView = ListView
})(this)
