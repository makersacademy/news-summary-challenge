(function(exports) {
  function Headline(headlineText) {
    this._headline = headlineText;
  };

  Headline.prototype.get = function () {
    return this._headline;
  };

  exports.Headline = Headline;
})(this);
