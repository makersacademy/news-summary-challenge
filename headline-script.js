var request = new XMLHttpRequest();
var url = `https://content.guardianapis.com/search?api-key=${GUARDIAN_API}&show-fields=all&q=uk&page-size=12`
request.open('GET', url, true);
var articleList = new ArticleList()

request.onload = function() {
  var apiData = JSON.parse(this.response)
  var data = apiData.response.results
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
