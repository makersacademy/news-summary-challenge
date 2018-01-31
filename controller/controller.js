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
    var headline = controller.headlineList.getHeadlineById(parseInt(id));
    fetchArticleSummary(headline)
  };

  function fetchArticleSummary(headline) {
    aylienRequest = new AylienAPI();
    aylienRequest.makeRequest(function(summary) {
      renderSummary(headline, summary);
    }, headline.getURL());
  };

  function renderSummary(headline, summary) {
    articleSummary = new ArticleSummary(headline, summary)
    articleSummaryView = new ArticleSummaryView(articleSummary);
    document.getElementById("app").innerHTML = articleSummaryView.createHtmlString();
  };

  function createHeadlineList(articles) {
    articles.forEach(function(article) {
      controller.headlineList.createHeadline(article.webTitle, article.webUrl, article.fields.thumbnail);
    });
    displayHeadlines();
  };


controller = new NewsController();
controller.api.makeRequest(createHeadlineList, controller.headlineList)
displayArticleSummary();
