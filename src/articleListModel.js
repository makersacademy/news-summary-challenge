(function(object) {
  class ArticleList {
    constructor() {
      this._articles = []
    }

    articles() {
      return this._articles
    }

    addArticle(title) {
      this._articles.push(new Article(title))
    }
  }

  object.ArticleList = ArticleList
})(this)
