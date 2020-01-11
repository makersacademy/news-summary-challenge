(function(object) {
  class ArticleListView {
    constructor(articleList) {
      this._articleList = articleList
    }

    htmlString() {
      return this._articleList.articles().reduce(function(htmlString, article) {
        return htmlString + `<li>${article.title()}</li>`
      }, "")
    }
  }

  object.ArticleListView = ArticleListView
})(this)
