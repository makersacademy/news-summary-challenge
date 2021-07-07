(function (exports) {
  function HeadlinesList() {
    this.headlines = [];
  }

  HeadlinesList.prototype.addHeadline = function (headline) {
    this.headlines.push(headline);
  };

  HeadlinesList.prototype.returnHeadlines = function () {
    return this.headlines;
  };

  exports.HeadlinesList = HeadlinesList;
})(this);
