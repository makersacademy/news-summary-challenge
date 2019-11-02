(function(exports) {

  function HeadlineView(headline) {
    this.headline = headline
  }

  HeadlineView.prototype.returnSummary = function() {
    return "<h2>" + this.headline.title + "</h2>" + this.headline.body
  }

  exports.HeadlineView = HeadlineView
})(this)
