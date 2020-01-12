(function (exports) {
  function ArticleListView (articleList) {
    this._articleList = articleList
  }

  ArticleListView.prototype.createHtml = function () {

    var htmlString = "<ul>"
    this._articleList.getArticles().forEach( article => {
      var imgElm = `<img src="${article.getData().fields.thumbnail}" alt="image">`
      var aElm = `<a href="#articles/${article.getId()}">${article.getData().sectionName}: ${article.getData().webTitle}</a>`
      var listItem = '<li>' + imgElm + aElm + '</li>'
      htmlString += listItem
    })
    htmlString += '</ul>'
    return htmlString
  }

  exports.ArticleListView = ArticleListView
})(this)

'<ul><li><img src="https://media.guim.co.uk/627be5c20c09e4c908231a72f6ec9c6c86b56d50/0_152_5300_3180/500.jpg" alt="image"><a href="#articles/6">Film: Lullaby review – a no-thrills thriller</a></li><li><img src="https://media.guim.co.uk/4fe3ce5411249888cb3606cb68d1b9f39b9a1045/0_91_4116_2470/500.jpg" alt="image"><a href="#articles/7">World news: Nordic countries at odds with EU over minimum wage</a></li></ul>'
'<ul><li><img src="https://media.guim.co.uk/627be5c20c09e4c908231a72f6ec9c6c86b56d50/0_152_5300_3180/500.jpg" alt="image"><a href="#articles/0">Film: Lullaby review – a no-thrills thriller</a></li><li><img src="https://media.guim.co.uk/4fe3ce5411249888cb3606cb68d1b9f39b9a1045/0_91_4116_2470/500.jpg" alt="image"><a href="#articles/1">World news: Nordic countries at odds with EU over minimum wage</a></li></ul>'