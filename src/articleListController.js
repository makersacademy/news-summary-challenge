(function(object) {
  class ArticleListController {
    constructor(articleList = new ArticleList(), articleListView = new ArticleListView(ArticleList), request = new XMLHttpRequest()) {
      this._articleList = articleList
      this._articleListView = articleListView
      this._request = request
    }

    createArticleList() {
      var self = this
      var apiRequestUrl = "http://content.guardianapis.com/search?order-by=newest"
      var url = "https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=" + apiRequestUrl
      self._request.open("GET", url, true)
      self._request.onload = function() {
        JSON.parse(this.response).response.results.forEach(function(articleJson) {
          var title = articleJson.webTitle
          self._articleList.addArticle(title)
        })
      }
      self._request.send()
    }

    renderArticleList() {
      this._articleListView.updateArticleList(this._articleList)
      document.getElementById("article-list").innerHTML = this._articleListView.htmlString()
    }
  }

  object.ArticleListController = ArticleListController
})(this)
