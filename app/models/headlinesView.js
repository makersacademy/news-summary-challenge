(function(exports) {

  HeadlinesView = function(headlinesList = new HeadlinesList) {
    this._headlinesList = headlinesList
  }

  HeadlinesView.prototype.toHTML = function () {
    var headlines = this._headlinesList.returnHeadlines();
    var html = "<ul>"
    headlines.forEach(function(headline) {
      html += "<li><div>" + headline + "</div></li>"
    }); //for the headline to be a hyperlink you need to add a href tag and figure out how that works
    return html += "</ul>"
  };

  exports.HeadlinesView = HeadlinesView;
})(this);
