function News() {
  this.headlines = [];
  this.url = 'http://content.guardianapis.com/search?from-date=2018-03-11&to-date=2018-03-11&show-tags=webTitle&show-references=webTitle&show-fields=webTitle&show-rights=webTitle&page-size=all&api-key=349ff0e6-2b64-430b-af95-7538e0728a36';
}

news = new News();

var request = new XMLHttpRequest();
request.open('GET', news.url, true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400 ) {
    data = JSON.parse(request.responseText);
    for (var i = 0; i < data.response.results.length; i++) {
      news.headlines.push(data.response.results[i].webTitle);
      // console.log(data.response.results[i].webTitle)
    };
    // console.log(data.response.results[0].webTitle);
    // console.log(data.response.results.length);
  }
}
request.send();
console.log(news);
// news.getHeadlines();


// var request = new XMLHttpRequest();
// request.open('GET', url, true);
// request.onload = function() {
//   if (request.status >= 200 && request.status < 400) {
//     // Success!
//     var data = JSON.parse(request.responseText);
//     console.log(data.response.results);
//     console.log(data.response.results[0].webTitle);
//   } else {
//     // We reached our target server, but it returned an error
//     console.log('Error: No data');
//   }
// };
//
// request.onerror = function() {
//   // There was a connection error of some sort
// };
//
// request.send();
