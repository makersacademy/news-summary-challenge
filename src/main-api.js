var xhr = new XMLHttpRequest();
var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail,body" // Deliberately not using real API call function below
xhr.onreadystatechange = headlinesCallback;
function headlinesCallback() {
  if (xhr.readystate < 4) {
    return;
  }
  if (xhr.status !== 200) {
    return;
  }
  var apiCall = JSON.parse(xhr.responseText);
  executeHeadlines(apiCall)
}

xhr.open("GET", "testApiCall.txt", true); // swap 2nd argument for url if executing real API call "testApiCall.txt"
xhr.send("");

function executeHeadlines(apiCall) {
  var headlineList = new HeadlineList;
  headlineList.addHeadlines(apiCall);
  var newsController = new NewsController(headlineList);
  var headlinelistView = new HeadlineListView(newsController)
}