(function(exports) {
  function HeadlineList (optionalHeadlineConstructor) {
    this.Headline = optionalHeadlineConstructor || Headline
    this.list = []
  }

  HeadlineList.prototype = {
    add: function (options) {
      options.id = this.list.length
      this.list.push(new this.Headline(options))
    },

    all: function () {
      return this.list
    },

    get: function(id) {
      return this.list[id]
    }
  }

  exports.HeadlineList = HeadlineList

})(this)
