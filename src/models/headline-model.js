(function(exports) {
  
  function Headline(options) {
    this._headline = options.headline
    this._url = options.url
  }

  Headline.prototype = {
    getHeadline: function () {
      return this._headline
    },
    getURL: function () {
      return this._url}
  }

  exports.Headline = Headline

})(this)
