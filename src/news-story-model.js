(function(exports) {
  function Story(headline, summary) {
    this._headline = headline
    this._summary = summary
  }

  Story.prototype.getHeadline = function() {
    return this._headline;
  };

  Story.prototype.getSummary = function() {
    return this._summary;
  };

exports.Story = Story;
})(this);
