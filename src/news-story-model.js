(function(exports) {
  function Story(headline) {
    this._headline = headline
  }

  Story.prototype.getHeadline = function() {
    return this._headline;
  };

exports.Story = Story;
})(this);
