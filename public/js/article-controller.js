(function (exports){
  function ArticleController(){
    this._articleList = new ArticleList()
    this._data
  }

  ArticleController.prototype.hashChange = function (url, windowObject = window) {
    var self = this
    self.getArticlesListRequest(url)
    windowObject.addEventListener("hashchange", renderDisplay)
    function renderDisplay () {
      if (location.hash === '') {
        self.getArticlesListRequest(url)
      } else {
        var article = self.articleById(self.articleIdFromUrl(windowObject.location))
        var alyien_end_point = "https://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="
        var url = alyien_end_point + article.getData().webUrl
        self.getSingleArticleRequest(url, article)
        // get article summary
        // render display
      }
    }
  }

  ArticleController.prototype.articleById = function(id) {
    console.log(id)
    console.log(this._articleList.getArticles())
    return this._articleList.getArticles().find(article => article.getId() == id)
  }

  ArticleController.prototype.articleIdFromUrl = function (location) {
    var id = location.hash.split("#articles/")[1]
    return id
  };

  ArticleController.prototype.getArticlesListRequest = function (url, request = new XMLHttpRequest()) {
    var self = this
    request.open("GET", url, true)
    request.onload = function() {
      self._data = JSON.parse(request.responseText)
      self.renderArticleListHtml()
    }
    request.send()
  }

  ArticleController.prototype.getSingleArticleRequest = function (url, article, request = new XMLHttpRequest()) {
    var self = this
    request.open("GET", url, true)
    request.onload = function() {
      console.log(JSON.parse(request.responseText))
      article.addSummaryData(JSON.parse(request.responseText))
      self.renderSingleArticleHtml(article)
    }
    request.send()
  }

  // ArticleController.prototype.showArticleByUrl = function (windowObject = window, element = document.getElementById("app")) {
  //   var self = this;
  //   windowObject.addEventListener("hashchange", showIndividualArticle)

  //   function showIndividualArticle () {
  //     console.log(self)
  //   }
  // }


  ArticleController.prototype.renderArticleListHtml = function () {
    var self = this
    self._data.response.results.forEach( article => {
      self._articleList.addArticle(article)
    })
    articleListView = new ArticleListView(self._articleList)
    document.getElementById("app").innerHTML = articleListView.createHtml()
  }

  exports.ArticleController = ArticleController;
})(this);