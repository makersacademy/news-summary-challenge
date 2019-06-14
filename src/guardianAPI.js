
var guardianRequest = new XMLHttpRequest();
guardianRequest.addEventListener("load", guardianListener);
guardianRequest.open("GET", "https://content.guardianapis.com/search?q=content&show-fields=thumbnail&api-key=" + MY_API_KEY)
guardianRequest.send();

function guardianListener() {
  var story = JSON.parse(this.responseText).response.results;
  for (var i = 0; i < story.length; i++) {

    document.getElementById('news-container').innerHTML +=

      "<a href=" + story[i].webUrl + "><p>"
      + story[i].webTitle + 
      "</p><img src=" + story[i].fields.thumbnail + "><br>";
  }
};


// var guardianRequest = new XMLHttpRequest();
// guardianRequest.open("GET", "https://content.guardianapis.com/search?q=politics&show-fields=bodyText,thumbnail&api-key=" + MY_API_KEY)
// guardianRequest.send();
// var json = JSON.parse(guardianRequest.responseText);
// var story = json.response.results