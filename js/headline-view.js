(function(exports) {
  function HeadlineView(headlineParser) {}

  HeadlineView.prototype = {
    returnHTML: function(articles) {
      var headlines = articles.map(function(article, index) {
        return ["<div class='image'><img src='' alt='political picture'></div><h2>",
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
