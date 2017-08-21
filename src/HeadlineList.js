(function(exports) {
  function HeadlineList() {
    this.list = [];
  }

  HeadlineList.prototype.getList = function() {
    return this.list;
  }

  HeadlineList.prototype.addHeadlines = function(apiResponse) {
    apiResponse.forEach(function(headline) {
      this.list.push(headline.webTitle);
  })
}

  exports.HeadlineList = HeadlineList;
})(this);
