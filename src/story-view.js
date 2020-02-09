'use strict';

(function(exports) {
  function View(story) {
    this.story = story
  }

  View.prototype.createString = function() {
    var string = "<ul><li><div><a>" + this.story.title + "</a></div></li></ul>"
    return string
  }
  
  exports.View = View
})(this);
