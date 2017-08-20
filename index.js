window.addEventListener("load", function() {

  function requestToGuardianApi() {
    var url = "https://content.guardianapis.com/search?show-fields=body,thumbnail&api-key=test"
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var responseObject = JSON.parse(this.responseText);
        getResponse(responseObject)
      }
    };
    xhttp.open("GET",url, true);
    xhttp.send();
  }

  function getResponse(responseObject) {
    var resultsArray = responseObject.response.results;
    createStory(resultsArray);
  }

  function createStory(resultsArray) {
    for(i=0; i < resultsArray.length; i++) {
      var story = new Story(resultsArray[i]);
      var storyView = new StoryView(story);
      storyView.displayStory();
    }
  }

  requestToGuardianApi();
});
