(function (exports) {
  function NewspaperController (newspaperView = NewspaperView, singleArticleView = SingleArticleView) {
    this.newspaperView = new newspaperView()
    this._singleArticleView = singleArticleView
  }

  NewspaperController.prototype.newArticle = function (headline, url, thumbnailUrl, api) {
    this.newspaperView.newspaper.newArticle (headline, url, thumbnailUrl, api)
  }

  NewspaperController.prototype.getAllArticles = function () {
    return this.newspaperView.newspaper.getAllArticles()
  };

  NewspaperController.prototype.printHeadlinesToList = function () {
    document.getElementById('headlines').innerHTML = this.newspaperView.headlinesToHtml()
  };

  NewspaperController.prototype.getSingleArticleHtml = function (article) {
    var singleArticleView = new this._singleArticleView (article)
    return singleArticleView.convertToHtml()
  };

  exports.NewspaperController = NewspaperController

})(this)
