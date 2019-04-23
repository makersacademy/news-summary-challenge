(function(exports) {

  function ArticlesListView(articlesList) {
    this.articlesList = articlesList
  }

  ArticlesListView.prototype.returnHtml = function() {
    var html = "<ul>"
    for (var i = 0; i < this.articlesList.listArray.length; i++) {
      html += `<li><a href="${
        this.articlesList.listArray[i].webUrl
      }">${
        this.articlesList.listArray[i].webTitle
      }</a></li>`
    }
    html += "</ul>"
    return html
  }

  exports.ArticlesListView = ArticlesListView
})(this)