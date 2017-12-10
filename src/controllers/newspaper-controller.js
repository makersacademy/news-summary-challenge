(function (exports) {
  function NewspaperController (
    httpRequestController = new HttpRequestController('efef39e2-dd39-49a5-888d-c919db3904e6'),
    newspaperView = NewspaperView,
    singleArticleView = SingleArticleView) {

    this.httpRequestController = httpRequestController
    this.newspaperView = new newspaperView()
    this._singleArticleView = singleArticleView
  }

  NewspaperController.prototype.newArticle = function (headline, url, thumbnailUrl, api) {
    this.newspaperView.newspaper.newArticle (headline, url, thumbnailUrl, api)
  }

  NewspaperController.prototype.saveArticles = function (arrayOfJson) {
    var newspaperController = this
    arrayOfJson.forEach(function (info) {
      var headline = info.fields.headline
      var url = info.webUrl
      var thumbnail = info.fields.thumbnail
      var api = info.apiUrl
      newspaperController.newArticle(headline, url, thumbnail, api)
    })
  };

  NewspaperController.prototype.getAllArticles = function () {
    return this.newspaperView.newspaper.getAllArticles()
  };

  NewspaperController.prototype.printHeadlinesToList = function () {
    document.getElementById('headlines').innerHTML = this.newspaperView.headlinesToHtml()
  };

  NewspaperController.prototype.getSingleArticleHtml = function (article) {
    var singleArticleView = new this._singleArticleView (article)
    return singleArticleView.convertToHtml()
  };

  NewspaperController.prototype.sendGetRequest = function () {
    var httpRequestController = this.httpRequestController
    httpRequestController.sendRequest(httpRequestController)
  };

  NewspaperController.prototype.eventLoadArticles = function () {
    var newspaperController = this
    var httpRequestController = this.httpRequestController
    window.addEventListener("load", function () {
      httpRequestController.sendRequest(httpRequestController)
      var allArticles = httpRequestController.convertToJSON(httpRequestController.request.responseText).response.results
      newspaperController.saveArticles(allArticles)
      newspaperController.printHeadlinesToList ()
    })
  };

  NewspaperController.prototype.eventOpenArticle = function () {
    var newspaperController = this
    var httpRequestController = this.httpRequestController
    window.addEventListener("hashchange", function () {
      var articleId = Number(window.location.hash.split('#')[1])
      var singleArticle = newspaperController.getAllArticles()[articleId - 1]
      var singleArticleDiv = document.getElementById(`article-${articleId}`)
      singleArticleDiv.innerHTML = newspaperController.getSingleArticleHtml (singleArticle)
    })
  };

  NewspaperController.prototype.eventCollapseArticles = function () {
    var newspaperController = this
    var collapseArticles = document.getElementById('collapse-articles')
    collapseArticles.addEventListener ("click", function () {
      newspaperController.printHeadlinesToList ()
    })
  };

  exports.NewspaperController = NewspaperController

})(this)
