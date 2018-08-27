(function(exports) {
  function SummaryView(summary) {
    this._summary = summary;
  };

  SummaryView.prototype.htmlParser = function () {
    var str = `<div><h2></h2><button type="button" id="back">Back</button> ${this._summary} </div>`;
    return str;
  };

  exports.NewsStoryView = NewsStoryView;
})(this)
