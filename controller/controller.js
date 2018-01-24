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
    fetchArticleSummary(article)
    // renderView(article)
  };

  function fetchArticleSummary(article) {
    aylienRequest = new AylienAPI(article.getURL());
    aylienRequest.makeRequest(renderSummary);
  };

  function renderSummary(summary) {
    articleView = new ArticleView(article);
    document.getElementById("app").innerHTML = articleView.createHtmlString();
  };

  function createHeadlineList(articles) {
    articles.forEach(function(article) {
      controller.headlineList.createArticle(article.webTitle, article.webUrl);
    });
    displayHeadlines();
  };


controller = new NewsController();
controller.api.makeRequest(createHeadlineList)
displayArticleSummary();
