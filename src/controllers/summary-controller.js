import * as viewExports from '../views/summary-view.js'

class SummaryController {
  constructor (articleList) {
    this.articleList = articleList
    this.summaryView = null
  }

  findArticleByID (id) {
    const article = this.articleList.articles.find(article => {
      return String(article.id) === id
    })
    this.summaryView = new viewExports.SummaryView(article)
  }

  getSummaryURL () {
    return this.summaryView.article.url
  }

  renderSummary (summaryData) {
    this.summaryView.article.summary = summaryData
    const html = this.summaryView.renderSummaryHTML()
    document.getElementById('content').innerHTML = html
  }
}

export { SummaryController }
