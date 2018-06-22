function Headlines() {
  this.headlinesArray = []
}

var testHeadline = "Test Headline: Bacon is Good For You!"

Headlines.prototype.addHeadline = function () {
  this.headlinesArray.push(testHeadline)
}


function HeadlineRequest() {
  console.log("testing here")
  var httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = checkRequestResponse;
  httpRequest.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2018-05-02%26show-fields=thumbnail", true)
  httpRequest.send();

  function checkRequestResponse() {
    console.log("request response")
    try {
      console.log("within try")
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        console.log("within done")
        if (httpRequest.status === 200) {
          var response = JSON.parse(httpRequest.responseText)
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
