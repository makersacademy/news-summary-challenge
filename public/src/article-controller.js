(function(exports) {
  function ArticleController(articlesList) {
    this.articlesList = articlesList
    this.articlesListView = new ArticlesListView(this.articlesList)
    this.html = this.articlesListView.returnHtml()
  }

  ArticleController.prototype.renderHtml = function(element = document.getElementById("app")) {
    return element.innerHTML = this.html
  }

  exports.ArticleController = ArticleController
})(this)