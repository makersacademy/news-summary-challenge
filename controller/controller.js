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

  function displayArticleSummary() {
    window.addEventListener("hashchange", findArticleFromURL)
  };

  function findArticleFromURL() {
    var id = window.location.hash.split("#")[1];
    var article = controller.headlineList.getArticleById(parseInt(id));
    renderView(article)
  };

  function renderView(article) {
    articleView = new ArticleView(article);
    document.getElementById("app").innerHTML = articleView.createHtmlString();
  };

controller = new NewsController();
displayArticleSummary();
