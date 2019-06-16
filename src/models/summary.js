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