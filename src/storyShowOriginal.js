(function(exports){
  function StoryShowOriginal(story) {
    this.headline = story.headline;
    this.content = story.content;
  }

  StoryShowOriginal.prototype.renderText = function () {
    return `<h1>${this.headline}</h1><div>${this.content}</div>`;
  };
  exports.StoryShowOriginal = StoryShowOriginal;
})(this);
