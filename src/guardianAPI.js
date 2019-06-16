
var guardianRequest = new XMLHttpRequest();
guardianRequest.addEventListener("load", renderHeadlineListView);
guardianRequest.open("GET", "https://content.guardianapis.com/search?q=content&show-fields=thumbnail,bodyText&api-key=" + MY_API_KEY)
guardianRequest.send();
listenForClick();

function renderHeadlineListView() {

  var stories = JSON.parse(guardianRequest.responseText).response.results;

  document.getElementById("list-news").style.display = "block"
  document.getElementById("summary-news-block").style.display = "none"

  document.getElementById("summary-body-text").innerHTML = "";
  document.getElementById("summary-image").setAttribute("src", "")

  for (var i = 0; i < stories.length; i++) {
    document.getElementById('list-news').innerHTML +=
      "<div id='list-item'><a href=#" + stories[i].id + "><img class='image' id='image' src=" + stories[i].fields.thumbnail
      + "><h4 id='list-header'>" + stories[i].webTitle + "</h4>";
  }
};

function listenForClick() {
  window.addEventListener("hashchange", function() {
    if (window.location.href.includes('#home')) {
      renderHeadlineListView();
    }
    else {
      renderSummaryView();
    }
  })
};

function renderSummaryView() {

  var stories = JSON.parse(guardianRequest.responseText).response.results;
  var storyId = window.location.hash.split("#")[1];
  var story = findObjectByKey(stories, "id", storyId);

  document.getElementById("list-news").style.display = "none"
  document.getElementById("summary-news-block").style.display = "block"

  document.getElementById("summary-header").innerHTML = story.webTitle;
  document.getElementById("summary-image").setAttribute("src", story.fields.thumbnail)
  document.getElementById("summary-body-text").innerHTML = story.fields.bodyText;

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