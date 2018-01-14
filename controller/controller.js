(function(exports) {
  function NewsController(headlineList, headlineListView, api) {
    this.headlineList = headlineList || new HeadlineList();
    this.headlineListView = headlineListView || new HeadlineListView(this.headlineList);
    this.api = new GuardianAPI(this.headlineList)
  };

  exports.NewsController = NewsController;
})(this);

  function displayHeadlines() {
    document.getElementById("app").innerHTML = controller.headlineListView.createHtmlString();
  };

controller = new NewsController();
