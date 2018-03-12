getAll = function(containerUrl, containerObject) {
  console.log(containerObject);
  var request = new XMLHttpRequest();
  request.open('GET', containerUrl, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400 ) {
      data = JSON.parse(request.responseText);
      for (var i = 0; i < data.response.results.length; i++) {
        news = new News();
        // var extraData = data.responseText.results[i].blocks.body[i];
        console.log(data.response.results[i].fields.thumbnail);
        // console.log();
        news.headline = data.response.results[i].webTitle;
        news.headlineUrl = data.response.results[i].webUrl;
        news.image = data.response.results[i].fields.thumbnail;
        containerObject.all.push(news);
      };
    }

// Here we loop through the news items in container.all and put them into html
    var output = '';
    for (var i = 0; i < containerObject.all.length; i++) {
      output += '<li>' + containerObject.all[i].headline + '</li>';
      output += '<a href="' + containerObject.all[i].headlineUrl + '">' + containerObject.all[i].headline + ' </a>';
      output += '<img src="' + containerObject.all[i].image + '">';
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
