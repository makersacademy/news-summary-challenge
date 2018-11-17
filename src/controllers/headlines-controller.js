import * as viewExports from '../views/headlines-view.js'
import { apiKeys } from '../../api-keys.js'

class HeadlinesController {
  constructor (articleList) {
    this.articleList = articleList
    this.headlinesView = new viewExports.HeadlinesView(articleList)
    this.key = apiKeys.GUARDIAN_KEY
  }

  initializeHeadlines () {
    fetch(`https://content.guardianapis.com/search?show-fields=main&order-by=newest&page-size=10&q=technology&api-key=${this.key}`)
      .then(response => { return response.json() })
      .then(json => {
        this.setHeadlinesInformation(json.response.results)
        this.renderHeadlinesHTML()
      })
  }

  setHeadlinesInformation (resultsList) {
    var images = resultsList.map(resultObject => resultObject.fields.main)
    var headlines = resultsList.map(resultObject => resultObject.webTitle)
    var urls = resultsList.map(resultObject => resultObject.webUrl)
    headlines.forEach((headline, index) => {
      this.headlinesView.articleList.createArticle(headline, images[index], urls[index])
    })
  }

  renderHeadlinesHTML () {
    var html = this.headlinesView.renderListHTML()
    document.getElementById('content').innerHTML = html
  }
}

export { HeadlinesController }
