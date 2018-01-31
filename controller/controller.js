(function(exports) {
  function NewsController(headlineList, headlineListView, api) {
    this.headlineList = headlineList || new HeadlineList();
    this.headlineListView = headlineListView || new HeadlineListView(this.headlineList);
    this.api = new GuardianAPI()
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
    var articleID = controller.headlineList.getArticleById(parseInt(id));
    fetchArticleSummary(articleID)
  };

  function fetchArticleSummary(articleID) {
    aylienRequest = new AylienAPI();
    aylienRequest.makeRequest(function(summary) {
      renderSummary(articleID.getHeadline(), articleID.getURL(), summary);
    }, articleID.getURL());
  };

  function renderSummary(headline, url, summary) {
    articleSummary = new ArticleSummary(headline, url, summary)
    articleView = new ArticleView(articleSummary);
    document.getElementById("app").innerHTML = articleView.createHtmlString();
  };

  function createHeadlineList(articles) {
    articles.forEach(function(article) {
      controller.headlineList.createArticle(article.webTitle, article.webUrl, article.fields.thumbnail);
    });
    displayHeadlines();
  };


controller = new NewsController();
controller.api.makeRequest(createHeadlineList, controller.headlineList)
displayArticleSummary();
