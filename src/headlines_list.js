(function (exports) {
  function HeadlinesList() {
    this.headlines = [];
  }

  HeadlinesList.prototype.addHeadline = function (headline) {
    this.headlines.push(headline);
  };

  exports.HeadlinesList = HeadlinesList;
})(this);
