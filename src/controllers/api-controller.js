import { apiKeys } from '../../api-keys.js'

class APIController {
  constructor () {
    this.headlines_key = apiKeys.GUARDIAN_KEY
  }

  initializeHeadlines (callback) {
    fetch(`https://content.guardianapis.com/search?show-fields=main%2Cbody&order-by=newest&page-size=10&q=technology&api-key=${apiKeys.GUARDIAN_KEY}`)
      .then(response => { return response.json() })
      .then(json => { callback(json.response.results) })
  }
}

export { APIController }
