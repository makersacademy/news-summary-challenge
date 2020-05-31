(function(exports) {
  function ArticleController(articleList = new ArticleList()) {
    this.articleList = articleList
    this.articleListView = new ArticleListView(articleList)
  }

  ArticleController.prototype.insertHTML = function() {
    let app = document.getElementById('app')
    app.innerHTML = this.articleListView.returnHTMLstring();
  }

  exports.ArticleController = ArticleController
})(this)

let articleController = new ArticleController()
articleController.articleList.add('This is a headline')
articleController.insertHTML()
