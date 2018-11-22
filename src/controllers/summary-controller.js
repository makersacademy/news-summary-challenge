import * as viewExports from '../views/summary-view.js'
import { apiKeys } from '../../api-keys.js'

class SummaryController {
  constructor (articleList) {
    this.articleList = articleList
    this.summaryView = null
  }

  findArticleByID (id) {
    var article = this.articleList.articles.find(article => {
      return String(article.id) === id
    })
    this.summaryView = new viewExports.SummaryView(article)
  }

  getSummaryURL() {
    return this.summaryView.article.url
  }

  renderSummary (summaryData) {
    this.summaryView.article.summary = summaryData
    var html = this.summaryView.renderSummaryHTML()
    document.getElementById('content').innerHTML = html
  }
}

export { SummaryController }
