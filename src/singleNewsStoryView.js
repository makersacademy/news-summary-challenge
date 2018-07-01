"use strict";

(function(exports) {

  function SingleNewsStoryView(headline) {
    this.singleNewsStory = new SingleNewsStory(headline);
  };

  SingleNewsStoryView.prototype.returnNewsStoryHTML = function() {
    return `<div>${this.singleNewsStory.body}</div>`;
  };

  exports.SingleNewsStoryView = SingleNewsStoryView;

})(this);
