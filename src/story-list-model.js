'use strict';

(function(exports) {
  function List() {
    this.array = []
  }

  List.prototype.newStory = function(text) {
    var id = this.array.length
    var story = new Story(text, id)
    this.array.push(story)
    return story;
  }

  exports.List = List;
})(this)
