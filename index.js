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
  var element = document.getElementById("stories");
  var storyController = new StoryController(element)

  function getResponse(responseObject) {
    var resultsArray = responseObject.response.results;

    for(i=0; i < resultsArray.length; i++) {
      storyController.createStory(resultsArray[i]);
    }

  }

  // function createStory(resultsArray) {
  //   for(i=0; i < resultsArray.length; i++) {
  //     var story = new Story(resultsArray[i]);
  //     var storyView = new StoryView(story);
  //     storyView.displayStory();
  //   }
  // }
console.log("here")
  requestToGuardianApi();
});
