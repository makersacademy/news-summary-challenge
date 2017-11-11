(function(exports) {

  HeadlinesList = function() {
    this._allHeadlines = [];
  };

  HeadlinesList.prototype.returnHeadlines = function() {
    return this._allHeadlines
  };

  HeadlinesList.prototype.addHeadlines = function(headline) {
    this._allHeadlines.push(headline)
  }
  exports.HeadlinesList = HeadlinesList;
})(this);
