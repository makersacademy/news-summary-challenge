(function (exports) {
  function SingleArticleView (article) {
    this._article = article
    console.log(this._article)
  }

  SingleArticleView.prototype.createHtml = function () {
    // this is messy, tidy up into separate functions

    var htmlString = ""

    htmlString += '<h2>' + this._article.getData().webTitle + '</h2>'

    if (this._article.getData().fields){
      var image = this._article.getData().fields.thumbnail
    } else {
      var image = './images/No_Image_Available.jpg'
    }

    htmlString += `<img src="${image}" alt="image">`

    console.log(this._article.getSummaryData())

    this._article.getSummaryData().sentences.forEach(sentence => {
      var paraString = '<p>' + sentence + '</p>'
      htmlString += paraString
    })

    return htmlString
  }

  exports.SingleArticleView = SingleArticleView
})(this)
