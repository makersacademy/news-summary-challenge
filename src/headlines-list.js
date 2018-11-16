import * as articleExports from './article.js'

class HeadlinesList {
  constructor() {
    this.articles = []
  }

  createArticle(headline) {
    this.articles.push(
      new articleExports.Article(headline, this._nextArticleID())
    )
  }

  _nextArticleID() {
    return this.articles.length
  }
}

export { HeadlinesList }
