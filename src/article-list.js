import * as articleExports from './article.js'

class ArticleList {
  constructor () {
    this.articles = []
  }

  createArticle (headline, image, url) {
    this.articles.push(
      new articleExports.Article(headline, image, url, this._nextArticleID())
    )
  }

  _nextArticleID () {
    return this.articles.length
  }
}

export { ArticleList }
