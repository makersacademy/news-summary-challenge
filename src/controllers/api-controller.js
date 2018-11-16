import * as headlinesExports from './headlines-controller.js'
import { api_keys } from '../../api_keys.js'

class APIController {
  constructor() {
    this.headlines_key = api_keys.GUARDIAN_KEY
  }

  initializeHeadlines(callback) {
    fetch(`https://content.guardianapis.com/search?show-fields=main%2Cbody&order-by=newest&page-size=10&q=technology&api-key=${api_keys.GUARDIAN_KEY}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        callback(json.response.results)
      })
  }
}

export { APIController }
