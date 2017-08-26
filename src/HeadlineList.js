(function(exports) {
  function HeadlineList() {
    this.list = [];
  }

  HeadlineList.prototype.getList = function() {
    return this.list;
  }

  HeadlineList.prototype.addHeadlines = function(apiResponse) {
    var self = this;
    apiResponse.forEach(function(headline) {
      self.list.push(headline.webTitle);
  })
}

  exports.HeadlineList = HeadlineList;
})(this);
