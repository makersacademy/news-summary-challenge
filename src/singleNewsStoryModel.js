"use strict";

(function(exports) {

  function SingleNewsStory(story) {
    this.story = story;
  };

  SingleNewsStory.prototype.storyText = function() {
    return this.story.text
  };

  // SingleNewsStory.prototype.storyText = function() {
  //   var instance = this;
  //   // maybe need to get the id from the url and use that as the index of results to get the right api call / story
  //   var headlineApiUrl = (this.headline.id);
  //   console.log(this.headline.id)
  //   var httpRequest = new XMLHttpRequest();
  //   console.log("start")
  //   httpRequest.onreadystatechange = function() {
  //     console.log(1)
  //     if (this.readystate == 4 && this.status == 200) {
  //       console.log(2)
  //       // The function is not completing this stage - so the readystate must not be correct.
  //       instance.body = this.responseText;
  //     } else {
  //       console.log(3)
  //       console.log("There was an error with the request")
  //     }
  //   }
  //     console.log(4)
  //   httpRequest.open("GET", `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/${headlineApiUrl}?show-fields=body`, true)
  //     console.log(5)
  //   httpRequest.send();
  //     console.log(6)
  // };

  exports.SingleNewsStory = SingleNewsStory;

})(this);
