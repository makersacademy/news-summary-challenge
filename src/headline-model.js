(function(exports) {
  function Headline(headlineObject, id) {
    this.headlineObject = headlineObject;
    this.headlineId = id;
  }

  Headline.prototype.headlineText = function() {
    return this.headlineObject.webTitle
  };

  Headline.prototype.headlineId = function() {
    return this.headlineId
  };

  exports.Headline = Headline;
})(this);