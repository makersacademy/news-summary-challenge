import * as articleExports from './article.js'

class HeadlinesList {
  constructor() {
    this.articles = []
  }

  createArticle(headline, image) {
    this.articles.push(
      new articleExports.Article(headline, image, this._nextArticleID())
    )
  }

  _nextArticleID() {
    return this.articles.length
  }
}

export { HeadlinesList }
