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

function httpRequest() {
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world');
xhr.send(null);

xhr.onreadystatechange = function () {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      var returnedText = xhr.responseText
      data = (JSON.parse(returnedText)).response.results
      stringifiedData = ("data", JSON.stringify(data, null, 2)); // 'This is the returned text.'
      return stringifiedData
    } else {
      console.log('Error: ' + xhr.status); // An error occurred during the request.
    }
  }
};
}
//JSON.parse(stringifiedData)[0].apiUrl
function getOneNewsFromApi() {
  var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world/2020/feb/08/nelson--soweto-questions-mandela-legacy');
xhr.send(null);

xhr.onreadystatechange = function () {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      var returnedText = xhr.responseText
      data = (JSON.parse(returnedText))
      stringifiedData = ("data", JSON.stringify(data, null, 2)); // 'This is the returned text.'
      console.log(stringifiedData)
    } else {
      console.log('Error: ' + xhr.status); // An error occurred during the request.
    }
  }
};
}



// data = fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world')
//   .then((response) => {
//     return response.json();
//   })
//   .then((myJson) => {
//     raps = (myJson);
//   });

// async function getInfo() {
//   let response = await fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world/2020/feb/08/coronavirus-five-new-cases-in-france-are-british-nationals');
//   let data = await response.json()
//   return data;
// }
// getInfo().then(data => console.log(data))

fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search").then(response => {
   return response.json();
 }).then(data => {
   // Work with JSON data here
   console.log(data);
   let body = data.response.results;
   console.log(body)
   document.body.innerHTML = body;
 }).catch(err => {
   // Do something for an error here
   console.log("Whoopsie");
 });
