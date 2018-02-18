(function(exports) {

  function Headlines(headlines) {
    this._headlines = headlines;
  };

  Headlines.prototype.headlines = function () {
    return this._headlines;
  };

  exports.Headlines = Headlines;
})(this)
