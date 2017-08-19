(function(exports) {
  function HeadlineView(headlineParser) {
    this.parser = headlineParser;
  }

  HeadlineView.prototype = {
    returnHTML: function(response) {
      var headlines = this.parser.extractHeadlines(response).map(function(headline) {
        return "<li><div>" + headline + "</div></li>"
      }).join("");
      return "<ul>" + headlines + "</ul>";
    }
  };

  exports.HeadlineView = HeadlineView;
})(this);
