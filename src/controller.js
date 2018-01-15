(function(exports) {
  var Controller = function(list = new List(), listView = new ListView(list)) {
    this.list = list;
    this.listView = listView
  }

  Controller.prototype.printArticleList = function(elementID) {
    document.getElementById(elementID).innerHTML = listView.returnHTML()
  }

  Controller.prototype.printArticle = function(elementID, article) {
    var articleView = new ArticleView(article)
    document.getElementById(elementID).innerHTML = articleView.returnHTML()
  }

  exports.Controller = Controller
})(this)
