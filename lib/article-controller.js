// window.onload = function() {
//   var elem = document.getElementById('app');
//   elem.innerHTML = "howdy";
// }

(function(exports) {
  function ArticleController(articleList) {
    this.articleList = articleList
    this.articleListView = new ArticleListView(articleList)
  }

  ArticleController.prototype.insertHtml = function() {
    var elem = document.getElementById('app');
    elem.innerHTML = this.articleListView.returnHTML();
  }

  exports.ArticleController = ArticleController
})(this)

var articleList = new ArticleList()
articleList.addArticle(new Article("art1"))
articleList.addArticle(new Article("art2"))
var articleController = new ArticleController(articleList)
articleController.insertHtml()
