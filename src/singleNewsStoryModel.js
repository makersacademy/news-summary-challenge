"use strict";

(function(exports) {

  function SingleNewsStory(story) {
    this.story = story;
  };

  SingleNewsStory.prototype.storyText = function() {
    return this.story.text
  };

  exports.SingleNewsStory = SingleNewsStory;

})(this);
