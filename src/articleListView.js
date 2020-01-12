(function(object) {
  class ArticleListView {
    constructor(articleList) {
      this._articleList = articleList
    }

    toHtml() {
      return this._articleList.articles().reduce((htmlString, article) => {
        return htmlString + `<li>${article.title()}</li>`
      }, "")
      return test
    }

    updateArticleList(articleList) {
      this._articleList = articleList
    }
  }

  object.ArticleListView = ArticleListView
})(this)
