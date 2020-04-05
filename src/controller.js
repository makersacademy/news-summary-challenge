class Controller {
  constructor(apirequester) {
    this.apirequest = new Apirequester
  }

  renderHTMLHeadlines() {
    this.apirequest.sendRequest()
  }

  renderHTMLArticleSummaries() {

  }
}
