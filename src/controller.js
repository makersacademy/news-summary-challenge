class Controller {
  constructor() {
    this.apirequester = new ApiRequester;
  }

  returnHeadlines() {
    this.apirequester.sendRequest();
    let headlines = document.getElementById('headline-summary');
    headlines.innerHTML = this.apirequester.articlelistview.viewArticleListAsHTML();
  }

  renderHTMLArticleSummaries() {

  }
}
let controller = new Controller()
controller.returnHeadlines();
