(function(exports) {

  function StoryView(story) {
    this._story = story;
  }

  StoryView.prototype.story = function () {
    return this._story;
  };

  StoryView.prototype.parse = function () {
    string = `<h1>${this._story.story().fields.headline}</h1>`;
    string += `<img src="${this._story.story().fields.thumbnail}">`;
    string += `<h2>${this._story.story().fields.trailText}</h2>`;
    string += `<h3>${this._story.story().fields.byline}</h3>`;
    string += this._story.story().fields.body;
    return string;
  };

  exports.StoryView = StoryView;

})(this);
