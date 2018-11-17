import * as viewExports from '../views/summary-view.js'
import { apiKeys } from '../../api-keys.js'

class SummaryController {
  constructor(headlinesList) {
    this.headlinesList = headlinesList
    this.summaryView = null
  }
}

export { SummaryController }
