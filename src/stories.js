"use strict";

var Stories = (function() {

  var downloadStories = function() {
    var storyObjects = [];
    var results = guardianAPI(Settings.guardianURL);
    for(var i = 0; i < results.length; i++){
      var story = new Story(results[i]);
      storyObjects.push(story);
    }
    return storyObjects;
  };
  return {
      downloadStories: downloadStories
  }
})();
