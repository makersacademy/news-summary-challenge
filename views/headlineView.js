'use strict';

(function (exports) {
  function HeadlineView(headlinerequester) {
    this.headlinerequester = headlinerequester;
  }

  HeadlineView.prototype.headlineHtml = function () {
    var string = "<ul>"
    this.headlinerequester.headlines.forEach(function(story) {
      string += `<li><a href="#${story.id}">${story.webTitle}</a></li>`
    })
    string += "</ul>"
    return string
  }

  exports.HeadlineView = HeadlineView

})(this);
