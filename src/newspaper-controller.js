(function (exports) {
  function NewspaperController (newspaperView = NewspaperView) {
    this.newspaperView = new newspaperView()
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

  exports.NewspaperController = NewspaperController

})(this)
