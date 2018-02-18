'use strict';

(function (exports) {
  function SingleLinkView(story) {
    this.story = story
  }

  SingleLinkView.prototype.singleLinkHtml = function () {
    return `<a href='${this.story.webUrl}' id="articleLink">See the whole story here</a>`
  }

  exports.SingleLinkView = SingleLinkView

})(this);
