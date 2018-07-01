var request = new XMLHttpRequest();
request.open('GET', 'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all&q=uk&page-size=12');
request.responseType = 'json';
request.send();
var articlelist = new ArticleList;
var apidata = [];
request.onload = function() {
  apidata = request.response.response.results;

  for(i = 0; i < apidata.length; i++) {
    articlelist.save(apidata[i].webTitle, apidata[i].fields.body, apidata[i].webUrl, apidata[i].webPublicationDate);
    console.log("saved")
  }

  (function() {
    var headlines = document.getElementById('headlines');
    var articlelistview = new ArticleListView(articlelist);
    headlines.innerHTML = articlelistview.htmlStringify();
  })();

};
