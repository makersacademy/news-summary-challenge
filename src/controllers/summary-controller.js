import * as viewExports from '../views/summary-view.js'
import { apiKeys } from '../../api-keys.js'

class SummaryController {
  constructor (articleList) {
    this.articleList = articleList
    this.summaryView = null
  }

  initializeSummary(id) {
    this.findArticleByID(id)
    this.getSummary(this.summaryView.article.url)
  }

  findArticleByID(id) {
    var article = this.articleList.articles.find(article => {
      return String(article.id) === id
    })
    this.summaryView = new viewExports.SummaryView(article)
  }

  getSummary(articleURL) {
    fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${articleURL}`)
      .then(response => { return response.json() })
      .then(json => {
        this.setSummaryInformation(json.sentences)
        this.renderSummaryHTML()
      })
  }

  setSummaryInformation(summaryData) {
    this.summaryView.article.summary = summaryData
  }

  renderSummaryHTML() {
    var html = this.summaryView.renderSummaryHTML()
    document.getElementById('content').innerHTML = html
  }
}

export { SummaryController }
