import * as viewExports from '../views/summary-view.js'
import { apiKeys } from '../../api-keys.js'

class SummaryController {
  constructor (articleList) {
    this.articleList = articleList
    this.summaryView = null
  }
}

export { SummaryController }
