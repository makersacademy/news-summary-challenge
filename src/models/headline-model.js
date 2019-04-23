(function(exports) {
  
  function Headline(options) {
    this._headline = options.headline
    this._url = options.url
    this._thumbnail = options.thumbnail
    this._id = options.id
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
    },
    getID: function () {
      return this._id
    }
  }

  exports.Headline = Headline

})(this)
