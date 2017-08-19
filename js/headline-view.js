(function(exports) {
  function HeadlineView(headlineParser) {
    this.parser = headlineParser;
  }

  HeadlineView.prototype = {
    returnHTML: function(response) {
      var headlines = this.parser.extractHeadlines(response).map(function(article) {
        return ["<li><div>",
                  article.headline,
                  " - " + "<a href='",
                  article.url,
                  "' target='_blank'>",
                  "Go to full link</a>",
                  "</div></li>"
                ].join("");
      }).join("");
      return "<ul>" + headlines + "</ul>";
    }
  };

  exports.HeadlineView = HeadlineView;
})(this);
