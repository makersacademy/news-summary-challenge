class Controller {
  constructor() {
    this.apirequester = new ApiRequester;
  }

  returnHeadlines() {
    this.apirequester.sendRequest();
  }

  renderHTMLArticleSummaries() {

  }
}
let controller = new Controller()
controller.returnHeadlines();
