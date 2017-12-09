(function (exports) {
  function SingleArticleView (article) {
    this._article = article
  }

  SingleArticleView.prototype.convertToHtml = function () {
    var article = this._article
    var htmlString = `<div><img src="${article.getThumbnailUrl()}"></div>` +
    `<div><h4>${article.getHeadline()}</h4></div>` +
    `<div><a href="${article.getUrl()}">See Full Story</a></div>`
    return htmlString;
  };

  exports.SingleArticleView = SingleArticleView

})(this)
