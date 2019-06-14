
var guardianRequest = new XMLHttpRequest();
guardianRequest.addEventListener("load", guardianListener);
guardianRequest.open("GET", "https://content.guardianapis.com/search?q=politics&api-key=" + MY_API_KEY)
guardianRequest.send();

function guardianListener() {
  var json = JSON.parse(this.responseText);
  for (var i = 0; i < json.response.results.length; i++) {
    document.getElementById('news-container').innerHTML += "<div><li>" + json.response.results[i].webTitle + "</li></div><br>";
  }
};
