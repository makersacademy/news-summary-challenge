var request = new XMLHttpRequest();
var url = "https://content.guardianapis.com/search?show-elements=all&show-fields=all&api-key=6903f70b-8ea8-4bdd-bcf4-b7ead85f2e20&q=uk&page-size=13"
request.open('GET', url, true);
var articleList = new ArticleList();

request.onload = function() {
  var data = JSON.parse(this.response).response.results
  if (request.status >= 200 && request.status < 400) {
    for (var i = 0; i < data.length - 1; i++) {
      articleList.create(data[i].webTitle, data[i].webPublicationDate, data[i].webUrl, data[i].fields.main)
    }

    var newsController = new NewsController(articleList)
    newsController.insertHeadlineHtml()
    newsController.makeUrlChangeSummaryForCurrentPage()

  } else {
  console.log('error');
  }
}

request.send()