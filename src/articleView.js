(function(object) {
  class ArticleView {
    constructor(article = new Article()) {
      this._article = article
    }

    summaryToHtml() {
      return `<p class="article-summary">${this._article.summary()}</p>`
    }
  }

  object.ArticleView = ArticleView
})(this)
