(function(exports) {
  function HeadlineList (optionalHeadlineConstructor) {
    this.Headline = optionalHeadlineConstructor || Headline
  }

  HeadlineList.prototype = {
    add: function (options) {
      new this.Headline(options)
    }
  }

  exports.HeadlineList = HeadlineList

})(this)
