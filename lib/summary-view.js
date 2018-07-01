(function(exports) {
  function SummaryView(summary) {
    this._summary = summary;
  };

  SummaryView.prototype.htmlStringify = function () {
    var htmlstring = `<div><h2></h2><button type="button" id="back">Back</button>
` + this._summary + `</div>`;
    return htmlstring;
  };

  exports.ArticleView = ArticleView;
})(this)
