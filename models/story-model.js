(function(exports) {

  function Story(story) {
    this._headline = story.fields.headline;
    this._thumbnail = story.fields.thumbnail;
    this._trailText = story.fields.trailText;
    this._byline = story.fields.byline;
    this._body = story.fields.body;
  }

  Story.prototype.headline = function () {
    return this._headline;
  };

  Story.prototype.thumbnail = function () {
    return this._thumbnail;
  };

  Story.prototype.trailText = function () {
    return this._trailText;
  };

  Story.prototype.byline = function () {
    return this._byline;
  };

  Story.prototype.body = function () {
    return this._body;
  };

  exports.Story = Story;

})(this);
