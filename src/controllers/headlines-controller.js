import * as viewExports from '../views/headlines-view.js'
import { apiKeys } from '../../api-keys.js'

class HeadlinesController {
  constructor (headlinesList) {
    this.headlinesList = headlinesList
    this.headlinesView = new viewExports.HeadlinesView(headlinesList)
    this.key = apiKeys.GUARDIAN_KEY
  }

  initializeHeadlines () {
    fetch(`https://content.guardianapis.com/search?show-fields=main%2Cbody&order-by=newest&page-size=10&q=technology&api-key=${this.key}`)
      .then(response => { return response.json() })
      .then(json => {
        this.setHeadlinesInformation(json.response.results)
        this.renderHeadlinesHTML()
      })
  }

  setHeadlinesInformation (resultsList) {
    var images = resultsList.map(resultObject => resultObject.fields.main)
    var headlines = resultsList.map(resultObject => resultObject.webTitle)
    headlines.forEach((headline, index) => {
      this.headlinesView.headlinesList.createArticle(headline, images[index])
    })
  }

  renderHeadlinesHTML () {
    var html = this.headlinesView.renderListHTML()
    document.getElementById('headlines').innerHTML = html
  }
}

export { HeadlinesController }
