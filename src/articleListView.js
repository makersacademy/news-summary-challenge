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

    updateArticleList(articleList) {
      this._articleList = articleList
    }
  }

  object.ArticleListView = ArticleListView
})(this)
