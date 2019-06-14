
var guardianRequest = new XMLHttpRequest();
guardianRequest.addEventListener("load", renderHeadlineListView);
guardianRequest.open("GET", "https://content.guardianapis.com/search?q=content&show-fields=thumbnail,bodyText&api-key=" + MY_API_KEY)
guardianRequest.send();


function renderHeadlineListView() {

  var stories = JSON.parse(guardianRequest.responseText).response.results;

  document.getElementsByTagName("h1").innerHTML = "Makers Gazette";
  document.getElementById("body-text").innerHTML = "";
  document.getElementById("back-button").style.display = "none"

  for (var i = 0; i < stories.length; i++) {
    document.getElementById('news-container').innerHTML +=
      "<a href=#" + stories[i].id + "><p>"
      + stories[i].webTitle + 
      "</p><img src=" + stories[i].fields.thumbnail + "><br>";
  }
};

listenForClick();

function listenForClick() {
  window.addEventListener("hashchange", function() {
    if (window.location.href.includes('#home')) {
      renderHeadlineListView();
    }
    else {
      renderSummaryView();
    }
  });
}

function renderSummaryView() {

  var stories = JSON.parse(guardianRequest.responseText).response.results;
  var storyId = window.location.hash.split("#")[1];
  var story = findObjectByKey(stories, "id", storyId);

  document.getElementsByTagName("h1").innerHTML = story.webTitle;
  document.getElementById("news-container").innerHTML = "";
  document.getElementById("body-text").innerHTML = story.fields.bodyText;
  document.getElementById("back-button").style.display = "block"

  function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        };
    };
  };
};


// var guardianRequest = new XMLHttpRequest();
// guardianRequest.open("GET", "https://content.guardianapis.com/search?q=politics&show-fields=bodyText,thumbnail&api-key=" + MY_API_KEY)
// guardianRequest.send();
// var json = JSON.parse(guardianRequest.responseText).response.results;