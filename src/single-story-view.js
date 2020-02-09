'use strict';

(function(exports) {
  function StoryView(story) {
    this.story = story;
  }

  StoryView.prototype.returnString = function() {
    var string = "<div>" + this.story.text + "</div>"
    return string
  }

  exports.StoryView = StoryView

})(this);