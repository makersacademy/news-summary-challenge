function headlineRequest() {

  var httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = checkRequestResponse;
  httpRequest.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2018-05-02%26show-fields=thumbnail", true)
  httpRequest.send();

  function checkRequestResponse() {
    try {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          var response = JSON.parse(httpRequest.responseText)
          return response;
          console.log("response");
          alert(httpRequest.responseText);
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
    catch(error) {
      alert('Caught Exception: ' + error.description);
    }
  }
}


function Headlines () {
  this.headlinesArray = []
}

Headlines.prototype.addHeadline = function (headline) {
  this.headlinesArray.push(headline)
}

Headlines.prototype.returnFromHeadlinesArray = function () {
return this.headlinesArray
}
