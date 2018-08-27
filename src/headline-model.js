(function(exports) {
  function Headline(headline, id) {
    this.headline = headline;
    this.headlineId = id;
  }

  Headline.prototype.headlineText = function() {
    return this.headline.webTitle
  };

  Headline.prototype.headlineId = function() {
    return this.headlineId
  };

  exports.Headline = Headline;
})(this);