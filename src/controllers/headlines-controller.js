import * as viewExports from '../views/headlines-view.js'

class HeadlinesController {
  constructor(headlinesList) {
    this.headlinesList = headlinesList
    this.headlinesView = new viewExports.HeadlinesView(headlinesList)
  }
}

export { HeadlinesController }
