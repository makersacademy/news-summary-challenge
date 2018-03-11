getWebtitles = function(newsUrl, newsObject) {
  var request = new XMLHttpRequest();
  request.open('GET', newsUrl, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400 ) {
      data = JSON.parse(request.responseText);
      for (var i = 0; i < data.response.results.length; i++) {
        newsObject.headlines.push(data.response.results[i].webTitle);
        // console.log(data.response.results[i].webTitle)
      };
      // console.log(data.response.results[0].webTitle);
      // console.log(data.response.results.length);
    }
    console.log(newsObject.headlines.length);
    console.log(newsObject.headlines[0]);
    var output = '';
    for (var i = 0; i < newsObject.headlines.length; i++) {
      output += '<li>' + newsObject.headlines[i] + '</li>';
    }
console.log(output);
document.getElementById('headlines').innerHTML = output;

    // displayNotes(newsObject);

    // Everything has to happen in here
  }
  request.send();
}

// var promise = new Promise(function(resolve, reject) {

// function displayNotes(newsObject) {
//   var output = "";
//   for (index = 0; index < newsObject.headlines.length; ++index) {
//     output += '<li>' + newsObject.notes[index] + '<li>';
//   }
//
//   document.getElementById('headlines').innerHTML = output;
// }
