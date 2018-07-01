function makeRequest(url, sendRequest) {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', url, false);
  httpRequest.send(sendRequest);
}

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var response = httpRequest.responseText;
      var json = JSON.parse(response);
      updatePage(json);
    } else {
      alert('There was a problem with the request.');
    }
  }
}

function updatePage(json){
  var element = document.getElementById('app');
  var headline = json.response.content.webTitle;
  var newsController = new NewsController(element, headline);
  newsController.inputHTMLtoDOM();
}

var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?"

var sendRequest = "show-fields=body"

makeRequest(url, sendRequest)
