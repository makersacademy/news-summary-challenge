import * as viewExports from '../views/headlines-view.js'

class HeadlinesController {
  constructor (articleList) {
    this.articleList = articleList
    this.headlinesView = new viewExports.HeadlinesView(articleList)
  }

  setHeadlinesInformation (resultsList) {
    const images = resultsList.map(resultObject => resultObject.fields.main)
    const headlines = resultsList.map(resultObject => resultObject.webTitle)
    const urls = resultsList.map(resultObject => resultObject.webUrl)
    headlines.forEach((headline, index) => {
      this.headlinesView.articleList.createArticle(headline, images[index], urls[index])
    })
  }

  renderHeadlinesHTML () {
    const html = this.headlinesView.renderListHTML()
    document.getElementById('content').innerHTML = html
  }
}

export { HeadlinesController }
