function extractInfoFromApi() {
  // a request object is created
  var request = new XMLHttpRequest()
  // a GET request is sent through the news-summary api to the guardian api
  request.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world', true)
  // a function to extract a JSON object containing the info (data) from the response
  request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  }
  request.send()
}


var data = fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    return(myJson);
  });