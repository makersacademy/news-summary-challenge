function NewsController() {
  this.apiCall = new GetAPIData()
  this.newsData;
  // need to insert callback to controller
  this.insertNewsIntoPage = function(newsJSON) {
    // return news
    this.newsData = newsJSON
    this.showNewsSummary()
  }
}

NewsController.prototype.refreshNewsData = function() {
  this.apiCall.makeRequest(this.insertNewsIntoPage.bind(this))

}

NewsController.prototype.showNewsSummary = function() {
  console.log(this.newsData.response.results)
  // var headlineString = ""
  // headlineString += "<div><ul>"
  // for (i=0; i<this.newsData.response.results.length; i++) {
  //   headlineString += "<li>" + "<div id=" + i + ">"
  //   // headlineString += "<a href='" + this.newsData.response.results[i].webUrl + "'>"
  //   headlineString += this.newsData.response.results[i].webTitle
  //   // headlineString += "</a>"
  //   headlineString += "</div></li>"
  // }
  // headlineString += "</ul></div>"
  // return headlineString
  for (i=0; i<this.newsData.response.results.length; i++) {
    document.getElementById(i).innerHTML = this.newsData.response.results[i].webTitle + "<br><img src=" + this.newsData.response.results[i].fields.thumbnail + ">"
  }
}

NewsController.prototype.updateSummaryPage = function() {
  document.getElementById("summary").innerHTML = this.showNewsSummary();
}

NewsController.prototype.articleView = function(artileId) {
  document.getElementById("header").innerHTML = this.newsData.response.results[artileId].webTitle + "<br><img src=" + this.newsData.response.results[artileId].fields.thumbnail + ">";
  document.getElementById("summary").innerHTML = this.newsData.response.results[artileId].fields.body;
}

// document.getElementById(0).addEventListener("click", function() {
//   document.getElementById("header").innerHTML = this.newsData.response.results[0].webTitle;
//   document.getElementById("summary").innerHTML = this.newsData.response.results[0].fields.body;
// });
