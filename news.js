function NewsController() {
  this.apiCall = new GetAPIData()
  this.newsData;
  // need to insert callback to controller
  this.callbackFunction = function(newsJSON) {
    // return news
    this.newsData = newsJSON.response.results
    this.showNewsSummary()
    console.log(this.newsData);
  }
}

NewsController.prototype.refreshNewsData = function() {
  this.apiCall.makeRequest(this.callbackFunction.bind(this))
}

NewsController.prototype.showNewsSummary = function() {
  document.getElementById("home-button").innerHTML = "<a href='#home'>Home</a>"
  document.getElementById("header").innerHTML = "Today's headlines: "
  document.getElementById("summary").innerHTML = generateSummaryString(this.newsData)
}

NewsController.prototype.articleView = function(articleId) {
  document.getElementById("home-button").innerHTML = "<a href='#home'>< Back to headlines</a>"
  document.getElementById("header").innerHTML = getArticleHeader(this.newsData,articleId)
  document.getElementById("summary").innerHTML = getArticleSummary(this.newsData,articleId)
}

NewsController.prototype.pageAddEventListener = function() {
  window.addEventListener("hashchange", this.changePagePath.bind(this))
}

NewsController.prototype.showPage = function(article) {
  if (article === "home") {
    this.showNewsSummary()
  } else {
    this.articleView(article)
    window.scrollTo(0, 0);
  }
}

NewsController.prototype.changePagePath = function() {
  this.showPage(getPathFromURL(window.location));
}
