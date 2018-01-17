(function(exports) {
  function NewsController(headlineList, headlineListView, api) {
    this.headlineList = headlineList || new HeadlineList();
    this.headlineListView = headlineListView || new HeadlineListView(this.headlineList);
    this.api = new GuardianAPI(this.headlineList)
  };

  exports.NewsController = NewsController;
})(this);

  function displayHeadlines() {
    console.log("I should be called second")
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

  function createHeadlineList(articles) {
    console.log("I should be called first")
    articles.forEach(function(article) {
      controller.headlineList.createArticle(article.webTitle, article.webUrl, article.fields.body);
    });
    displayHeadlines();
  };


controller = new NewsController();
controller.api.makeRequest(createHeadlineList)
displayArticleSummary();
