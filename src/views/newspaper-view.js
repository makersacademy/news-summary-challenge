(function (exports) {
  function NewspaperView (newspaperModel = NewspaperModel) {
    this.newspaper = new newspaperModel();
  }

  NewspaperView.prototype.headlinesToHtml = function () {
    var resultingString = ''
    this.newspaper.getAllArticles().forEach(function (article) {
      resultingString += `<li><div id="article-${article.getId()}">` +
        `<a href="#${article.getId()}">${article.getHeadline()}</a>` +
        `</div></li>`
    })
    return resultingString;

  };

  exports.NewspaperView = NewspaperView

})(this)
