getAll = function(containerUrl, containerObject) {
  console.log(containerObject);
  var request = new XMLHttpRequest();
  request.open('GET', containerUrl, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400 ) {
      data = JSON.parse(request.responseText);
      for (var i = 0; i < data.response.results.length; i++) {
        news = new News();
        console.log(data.response);
        news.headline = data.response.results[i].webTitle;
        news.headlineUrl = data.response.results[i].webUrl;
        containerObject.all.push(news);
      };
    }

// Here we loop through the news items in container.all and put them into html
    var output = '';
    for (var i = 0; i < containerObject.all.length; i++) {
      output += '<li>' + containerObject.all[i].headline + '</li>';
      output += '<a href="' + containerObject.all[i].headlineUrl + '">' + containerObject.all[i].headline + ' </a>'
    }

document.getElementById('headlines').innerHTML = output;
// displayNotes(newsObject);

    // Everything has to happen in here
  }
  request.send();
}

// function displayNotes(newsObject) {
//   var output = "";
//   for (index = 0; index < newsObject.headlines.length; ++index) {
//     output += '<li>' + newsObject.notes[index] + '<li>';
//   }
//
//   document.getElementById('headlines').innerHTML = output;
// }
