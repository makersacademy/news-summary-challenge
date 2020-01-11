(function(object) {
  class ArticleList {
    constructor(ArticleClass = Article) {
      this._articles = []
      this._ArticleClass = ArticleClass
    }

    articles() {
      return this._articles
    }

    addArticle(title) {
      this._articles.push(new this._ArticleClass(title))
    }
  }

  object.ArticleList = ArticleList
})(this)
