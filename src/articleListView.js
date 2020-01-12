(function(object) {
  class ArticleListView {
    constructor(articleList) {
      this._articleList = articleList
    }

    toHtml() {
      return this._articleList.articles().reduce((htmlString, article) => {
        return htmlString + `<li><a href="${article.url()}">${article.title()}</a></li>`
      }, "")
    }

    updateArticleList(articleList) {
      this._articleList = articleList
    }
  }

  object.ArticleListView = ArticleListView
})(this)
