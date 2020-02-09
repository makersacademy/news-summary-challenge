'use strict';

(function(exports) {
  function Story() {
    this.title = ""
  }

  Story.prototype.addTitle = function(title) {
    this.title = title
  }

  Story.prototype.showTitle = function() {
    return (this.title)
  }

  exports.Story = Story
})(this);
