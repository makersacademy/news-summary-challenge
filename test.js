var url = '<insert your api key here>'
// 'https://content.guardianapis.com/search?api-key=349ff0e6-2b64-430b-af95-7538e0728a36'

// getNews = function() {    // this is not a full code, only a snippet containing the relevant JSON.parse part.
//   var  = new XMLHttpRequest();
//   console.log(xhr);
//   console.log(xhr.response);
//   xhr.open("GET", url);
//   xhr.onload = function() {
//     if(xhr.status == 200) { // if success
//       var data = JSON.parse(xhr.responseText) // <------ convert the string to an object and access the responseText
//       console.log(xhr.responseText);
//     }
//   }
//   xhr.send();
// }
// getNews();


var request = new XMLHttpRequest();
request.open('GET', url, true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    console.log(data.response.results);
    console.log(data.response.results[0].webTitle);
  } else {
    // We reached our target server, but it returned an error
    console.log('Error: No data');
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
