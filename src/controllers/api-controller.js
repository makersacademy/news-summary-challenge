import { apiKeys } from '../../api-keys.js'

class APIController {
  initializeHeadlines (controller) {
    fetch(`https://content.guardianapis.com/search?show-fields=main&order-by=newest&page-size=10&q=technology&api-key=${apiKeys.GUARDIAN_KEY}`)
      .then(response => { return response.json() })
      .then(json => {
        controller.setHeadlinesInformation(json.response.results)
        console.log(json.response.results)
        console.log(controller)
        controller.renderHeadlinesHTML()
      })
  }

  initializeSummary (articleURL, controller) {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.aylien.com/api/v1/summarize?url=${articleURL}`, {
      headers: {
        'X-AYLIEN-TextAPI-Application-Key': apiKeys.AYLIEN_APP_KEY,
        'X-AYLIEN-TextAPI-Application-ID': apiKeys.AYLIEN_APP_ID
      }
    }).then(response => { return response.json() })
      .then(json => { controller.renderSummary(json.sentences) })
  }
}

export { APIController }
