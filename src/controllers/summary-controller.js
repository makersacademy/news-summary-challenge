import * as viewExports from '../views/summary-view.js'
import { apiKeys } from '../../api-keys.js'

class SummaryController {
  constructor (articleList) {
    this.articleList = articleList
    this.summaryView = null
  }

  initializeSummary(articleURL) {
    fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${articleURL}`)
      .then(response => { return response.json() })
      .then(json => {
        return json.sentences.join('<br>')
      })
  }
}

export { SummaryController }
