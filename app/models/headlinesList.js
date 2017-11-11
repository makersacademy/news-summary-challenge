(function(exports) {

  HeadlinesList = function() {
    this._allHeadlines = [];
  };

  HeadlinesList.prototype.returnHeadlines = function() {
    return this._allHeadlines
  };
  exports.HeadlinesList = HeadlinesList;
})(this);
