import { apiKeys } from '../../api-keys.js'

class APIController {
  constructor () {
  }

  initializeHeadlines (controller) {
    fetch(`https://content.guardianapis.com/search?show-fields=main&order-by=newest&page-size=10&q=technology&api-key=${apiKeys.GUARDIAN_KEY}`)
      .then(response => { return response.json() })
      .then(json => {
        controller.setHeadlinesInformation(json.response.results)
        controller.renderHeadlinesHTML()
      })
  }
}

export { APIController }
