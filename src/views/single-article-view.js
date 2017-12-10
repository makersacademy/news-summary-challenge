(function (exports) {
  function SingleArticleView (article) {
    this._article = article
  }

  SingleArticleView.prototype.convertToHtml = function () {
    var article = this._article
    var htmlString = `<div><h4>${article.getHeadline()}</h4></div>` +
    `<div><img src="${article.getThumbnailUrl()}" style="height: 150px;"></div>` +
    `<div><a href="${article.getUrl()}">See Full Story</a></div><br>`
    return htmlString;
  };

  exports.SingleArticleView = SingleArticleView

})(this)
