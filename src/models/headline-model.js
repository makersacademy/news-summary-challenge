(function(exports) {
  
  function Headline(options) {
    this._headline = options.headline
    this._url = options.url
    this._thumbnail = options.thumbnail
  }

  Headline.prototype = {
    getHeadline: function () {
      return this._headline
    },
    getURL: function () {
      return this._url
    },
    getThumbnail: function () {
      return this._thumbnail
    }
  }

  exports.Headline = Headline

})(this)
