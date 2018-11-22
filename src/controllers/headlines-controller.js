import * as viewExports from '../views/headlines-view.js'

class HeadlinesController {
  constructor (articleList) {
    this.articleList = articleList
    this.headlinesView = new viewExports.HeadlinesView(articleList)
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
