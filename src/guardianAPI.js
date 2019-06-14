
var guardianRequest = new XMLHttpRequest();
guardianRequest.addEventListener("load", guardianListener);
guardianRequest.open("GET", "https://content.guardianapis.com/search?q=politics&api-key=" + MY_API_KEY)
guardianRequest.send();

function guardianListener() {
  var json = JSON.parse(this.responseText);
  document.getElementById('news-data').innerHTML = json.response.results[0].webTitle;
}