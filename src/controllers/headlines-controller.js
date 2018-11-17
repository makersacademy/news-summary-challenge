import * as viewExports from '../views/headlines-view.js'

class HeadlinesController {
  constructor (headlinesList) {
    this.headlinesList = headlinesList
    this.headlinesView = new viewExports.HeadlinesView(headlinesList)
  }

  listHeadlines (resultsList) {
    this._setHeadlinesInformation(resultsList)
    this._renderHeadlinesHTML()
  }

  _setHeadlinesInformation (resultsList) {
    var images = resultsList.map(resultObject => resultObject.fields.main)
    var headlines = resultsList.map(resultObject => resultObject.webTitle)
    headlines.forEach((headline, index) => {
      this.headlinesView.headlinesList.create(headline, images[index])
    })
  }

  _renderHeadlinesHTML () {
    var html = this.headlinesView.renderListHTML()
    document.getElementById('headlines').innerHTML = html
  }
}

export { HeadlinesController }
