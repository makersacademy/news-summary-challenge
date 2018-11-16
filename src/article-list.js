import { Article } from './article.js'

class ArticleList {
  constructor() {
    this.articles = []
  }

  createArticle(headline) {
    this.articles.push(new Article(headline, this._nextArticleID()))
  }

  _nextArticleID() {
    return this.articles.length
  }
}

export { ArticleList }
