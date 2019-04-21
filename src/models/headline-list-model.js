(function(exports) {
  function HeadlineList (optionalHeadlineConstructor) {
    this.Headline = optionalHeadlineConstructor || Headline
    this.list = []
  }

  HeadlineList.prototype = {
    add: function (options) {
      this.list.push(new this.Headline(options))
    },

    all: function () {
      return this.list
    }
  }

  exports.HeadlineList = HeadlineList

})(this)
