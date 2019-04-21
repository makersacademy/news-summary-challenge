(function(exports) {
  
  function Headline(options) {
    this.headline = options.headline
  }

  Headline.prototype = {
    getHeadline: function () {
      return this.headline
    }
  }

  exports.Headline = Headline

})(this)
