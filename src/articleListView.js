(function(exports) {
  var ListView = function(list) {
    this.list = list
  }

  ListView.prototype.returnHTML = function(article) {
    htmlString =
    '<ul style="list-style:none">' +
      '<li>' +
        '<div align=center>' +
          '<img src=' + article.getThumbnail() + '>' +
          '<h2>' + article.getHeadline() + '<h2>'
          '<input type=button onclick=' + 'location.href="#article/' + article.getID() + '" value="Get Summary">' +
          '<input type=button onclick=' + 'location.href="' + article.getUrl() + '" value="Read full article"/>' +
        '</div>' +
      '</li>' +
    '</ul>'
    return htmlString
  }

  exports.ListView = ListView
})(this)
