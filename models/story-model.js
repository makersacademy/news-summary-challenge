(function(exports) {

  function Story(story) {
    this._story = story;
  }

  Story.prototype.story = function () {
    return this._story;
  };

  exports.Story = Story;

})(this);
