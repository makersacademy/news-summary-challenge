(function (exports) {
  function HeadlineList() {
    this.array = []
  }

  HeadlineList.prototype.returnList = function () {
    return this.array
  };

  HeadlineList.prototype.addHeadline = function (headline) {
    return this.array.push(headline)
  };

  exports.HeadlineList = HeadlineList
})(this)
