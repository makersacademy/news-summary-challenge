(function(exports) {
  function HeadlineView(headlineParser) {
    this.parser = headlineParser;
  }

  HeadlineView.prototype = {
    returnHTML: function(response) {
      var headlines = this.parser.extractArticles(response).map(function(article, index) {
        return ["<h2>",
                  "<a href='#/articles/" + article.id() + "'>",
                  article.headline(),
                  "</a> - ",
                  "<a href='" + article.url() + "' target='_blank'>",
                  "Go to full link</a>",
                  "</h2>"
                ].join("");
      }).join("");
      return "<h1>Headlines</h1><div id='headlines'>" + headlines + "</div>";
    }
  };

  exports.HeadlineView = HeadlineView;
})(this);
