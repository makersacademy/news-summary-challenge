(function(object) {
  class ArticleListController {
    constructor(articleList = new ArticleList(), articleListView = new ArticleListView(ArticleList), guardianApiRequest = new XMLHttpRequest()) {
      this._articleList = articleList
      this._articleListView = articleListView
      this._guardianApiRequest = guardianApiRequest
    }

    fetchArticleList() {
      var self = this
      var apiRequestUrl = "http://content.guardianapis.com/search?order-by=newest"
      var url = "https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=" + apiRequestUrl
      self._guardianApiRequest.open("GET", url, true)
      self._guardianApiRequest.onload = function() {
        JSON.parse(this.response).response.results.forEach(function(articleJson) {
          var title = articleJson.webTitle
          var url = articleJson.webUrl
          self._articleList.addArticle(title, url)
        })
      }
      self._guardianApiRequest.send()
    }

    renderArticleList() {
      this._articleListView.updateArticleList(this._articleList)
      document.getElementById("article-list").innerHTML = this._articleListView.toHtml()
    }
  }

  object.ArticleListController = ArticleListController
})(this)
