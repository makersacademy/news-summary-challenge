function getAndShowSummary(url){
  console.log(url);
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = getSummary;
  httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + url, true);
  httpRequest.send();

  function getSummary(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var response = JSON.parse(httpRequest.responseText).sentences
        console.log(response);
        return response
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
}
