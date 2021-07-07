(function (exports) {
  function ArticleListView (articleList) {
    this._articleList = articleList
  }

  ArticleListView.prototype.createHtml = function () {

    var htmlString = "<ul>"
    this._articleList.getArticles().forEach( article => {
      if (article.getData().fields){
        var image = article.getData().fields.thumbnail
      } else {
        var image = './images/No_Image_Available.jpg'
      }
        
      var imgElm = `<img src="${image}" alt="image">`
      var aElm = `<a href="#articles/${article.getId()}">${article.getData().sectionName}: ${article.getData().webTitle}</a>`
      var listItem = '<li>' + imgElm + aElm + '</li>'
      htmlString += listItem
    })
    htmlString += '</ul>'
    return htmlString
  }

  exports.ArticleListView = ArticleListView
})(this)

