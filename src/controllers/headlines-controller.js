import * as viewExports from '../views/headlines-view.js'

class HeadlinesController {
  constructor(headlinesList) {
    this.headlinesList = headlinesList
    this.headlinesView = new viewExports.HeadlinesView(headlinesList)
  }

  setHeadlinesInformation(resultsList) {
    var images = resultsList.map(resultObject => resultObject.fields.main)
    var headlines = resultsList.map(resultObject => resultObject.webTitle)
    headlines.forEach((headline, index) => {
      this.headlinesView.headlinesList.create(headline, images[index])
    })
  }
}

export { HeadlinesController }
