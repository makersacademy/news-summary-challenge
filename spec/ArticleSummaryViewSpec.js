(function() {
  console.log("Testing ArticleSummaryView: ");

  var mockArticle = {
    headline: "Elvis Presley's teeth visit Malvern",
    summary: function() {
      return "<p>par one</p> <p>par two</p> <p>par three</p>"
    },
    imageUrl: function() {
      return "https://media.guim.co.uk/7beefd4f2e38fa5c9b5f288ea48857e51e179967/145_145_2642_1585/1000.jpg"
    }
  }

  var articleSummaryView = new ArticleSummaryView(mockArticle);

  (function() {
    console.log(" it returns the correct html");
    var expectedHtml = [
      "<div>",
        "<img src='https://media.guim.co.uk/7beefd4f2e38fa5c9b5f288ea48857e51e179967/145_145_2642_1585/1000.jpg' />",
        "<h2>Elvis Presley's teeth visit Malvern</h2>",
        "<p>par one</p> <p>par two</p> <p>par three</p>",
      "</div>"].join("");
    assert.isTrue(articleSummaryView.toHtml() === expectedHtml);
  })();

})();
