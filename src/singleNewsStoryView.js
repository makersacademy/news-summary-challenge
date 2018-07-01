"use strict";

(function(exports) {

  function SingleNewsStoryView(story) {
    this.singleNewsStory = new SingleNewsStory(story);
  };

  SingleNewsStoryView.prototype.returnNewsStoryHTML = function() {
    return `<div>${this.singleNewsStory.storyText()}</div>`;
  };

  exports.SingleNewsStoryView = SingleNewsStoryView;

})(this);
