class Controller {
  constructor() {
    this.apirequester = new ApiRequester;
  }

  returnHeadlines() {
    this.apirequester.sendRequest()
  }

  renderHTMLArticleSummaries() {

  }
}
let article = new Article;
let articlelitview = new Articlelistview;
let articlelist = new Articlelist;
let controller = new Controller()
controller.returnHeadlines();
