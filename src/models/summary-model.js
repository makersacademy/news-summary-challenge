(function(exports){
  function Summary (options) {
    this._thumbnail = options.thumbnail
    this._headline = options.headline
    this._summary = options.summary
  }

  Summary.prototype = {
    getThumbnail: function() {
      return this._thumbnail
    },

    getHeadline: function() {
      return this._headline
    },

    getSummary: function() {
      return this._summary
    }
  }

  exports.Summary = Summary
})(this)
