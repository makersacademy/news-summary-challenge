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
// var getHttp = new APIData()
// var info = getHttp.makeRequest('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=uk&from-date=2020-03-08&show-fields=thumbnail,body%27').response.results
// articleList.addArticle(new Article(info[0].webTitle))
// articleList.addArticle(new Article(info[1].webTitle))

articleList.addArticle(new Article("art1"))
articleList.addArticle(new Article("art2"))
var articleController = new ArticleController(articleList)
articleController.insertHtml()
