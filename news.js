function NewsController() {
  this.apiCall = new GetAPIData()
  this.newsData;
  // need to insert callback to controller
  this.insertNewsIntoPage = function(newsJSON) {
    // return news
    this.newsData = newsJSON
    this.showNewsSummary()
    console.log(this.newsData);
  }
}

NewsController.prototype.refreshNewsData = function() {
  this.apiCall.makeRequest(this.insertNewsIntoPage.bind(this))
}

NewsController.prototype.showNewsSummary = function() {
  document.getElementById("home-button").innerHTML = "<a href='#home'>Home</a>"
  document.getElementById("header").innerHTML = "Today's headlines: "
  document.getElementById("summary").innerHTML = "<ul><hr><div id=0 class='container'></div><hr><div id=1 class='container'></div><hr><div id=2 class='container'></div><hr><div id=3 class='container'></div><hr><div id=4 class='container'></div><hr><div id=5 class='container'></div><hr><div id=6 class='container'></div><hr><div id=7 class='container'></div><hr><div id=8 class='container'></div><hr><div id=9 class='container'></div><hr></ul>"
  for (i=0; i<this.newsData.response.results.length; i++) {
    document.getElementById(i).innerHTML = "<a href='#" + i + "'>" + this.newsData.response.results[i].webTitle + "</a><br><img src=" + this.newsData.response.results[i].fields.thumbnail + ">"
  }
}

NewsController.prototype.articleView = function(artileId) {
  document.getElementById("home-button").innerHTML = "<a href='#home'>< Back to headlines</a>"
  document.getElementById("header").innerHTML = this.newsData.response.results[artileId].webTitle + "<br><img src=" + this.newsData.response.results[artileId].fields.thumbnail + ">";
   previewString = this.newsData.response.results[artileId].fields.trailText + "<br><br>" + this.newsData.response.results[artileId].fields.body.substring(0,this.newsData.response.results[artileId].fields.body.indexOf("</p>")) + "...<br><br>See the full article on <a href='" + this.newsData.response.results[artileId].webUrl + "'>The Guardian</a>";
   document.getElementById("summary").innerHTML = previewString
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

getPathFromURL = function(location) {
  return location.hash.split("#")[1];
}
