(function(exports) {
  function ArticleController(articleList = new ArticleList()) {
    this.articleList = articleList
    this.articleListView = new ArticleListView(articleList)
  }

  ArticleController.prototype.insertHTML = function() {
    let app = document.getElementById('app')
    app.innerHTML = this.articleListView.returnHTMLstring();
  }

  ArticleController.prototype.showSingleArticle = function() {
    let self = this;
    window.addEventListener('hashchange', function() {
      let id = window.location.hash.split('#articles/')[1]
      let article = self.articleList.list[id]
      let articleView = new ArticleView(article)
      document.getElementById('app').innerHTML = articleView.returnHTMLstring();
    }, false)
  }

  exports.ArticleController = ArticleController
})(this)
