var domain = "http://news-summary-api.herokuapp.com/guardian?"
var apiUrl = "http://content.guardianapis.com/media/2017/aug/17/game-of-thrones-secrets-revealed-as-hbo-twitter-accounts-hacked"
var fields = "?show-fields=body"
var query = domain + "apiRequestUrl=" + apiUrl + fields;

function loadContent() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      console.log(data);
      console.log(data.response.content.webTitle);
    }
  };
  xhttp.open("GET", query, true);
  xhttp.send();
}
