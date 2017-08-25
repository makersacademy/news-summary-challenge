(function(exports) {
  function HeadlineView() {}

  HeadlineView.prototype = {
    returnHTML: function(articles) {
      var i = 0;
      var headlines = articles.map(function(article, index) {
        i++;
        return ["<div class='article'>" +
                  "<div class='image'>"+
                    "<img src='" + article.displayThumbnail() + "' alt='political picture'>" +
                    "</div>" +
                    "<h2>" + article.displayTitle(),
                      "<a href='" + article.displayUrl() + "' target='_blank'>" + "Full article</a><div class='body'>" + article.displaySummary() + "</div>" +
                    "</h2>" +
                  "</div>"
                ].join("");
      }).join("");
      return "<h1>News</h1>" +
              "<div id='headlines'>," +
              ["<div class='article1'>" +
                "<div class='image'>" +
                  "<img src='" + articles[0].displayThumbnail() + "'alt='political picture'>" +
                  "</div>"+
                  "<h2>" + articles[0].displayTitle(),
                    "<a href='" + articles[0].displayUrl() + "' target='_blank'>" + "Full article</a>"+
                    "<div class='body'>" + articles[0].displaySummary() + "</div>" +
                "</h2>" +
              "</div>"].join("") + "<div id='headline'>" + headlines + "</div>" + "</div>";
            }
          };

  exports.HeadlineView = HeadlineView;
})(this);
