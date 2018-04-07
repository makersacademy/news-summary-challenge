(function(exports) {
  function Headline(headline) {
    this._headline = headline;
  };

  Headline.prototype.read = function () {
    return this._headline;
  };

  exports.Headline = Headline;
})(this);
