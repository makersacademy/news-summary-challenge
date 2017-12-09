(function(exports) {
  function Story(headline, summary, image) {
    this._headline = headline
    this._summary = summary
    this._image = image
  }

  Story.prototype.getHeadline = function() {
    return this._headline;
  };

  Story.prototype.getSummary = function() {
    return this._summary;
  };

  Story.prototype.getImage = function() {
    return this._image;
  };

exports.Story = Story;
})(this);
