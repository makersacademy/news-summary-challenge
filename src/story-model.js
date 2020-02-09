'use strict';

(function(exports) {
  function Story(text, id) {
    this.text = text
    this.id = id
  }

  Story.prototype.showText = function() {
    return this.text
  }

  exports.Story = Story;
})(this)
