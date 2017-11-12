(function() {
  console.log("Testing ArticleSummaryView: ");

  var mockArticle = {
    headline: "Elvis Presley's teeth visit Malvern",
    summary: function() {
      return "<p>par one</p> <p>par two</p> <p>par three</p>"
    }
  }

  var articleSummaryView = new ArticleSummaryView(mockArticle);

  (function() {
    console.log(" it can be instantiated with an article");
    assert.isTrue(articleSummaryView.article() === mockArticle);
  })();

  (function() {
    console.log(" it returns the correct html");
    var expectedHtml = [
      "<div>",
        "<h2>Elvis Presley's teeth visit Malvern</h2>",
        "<p>par one</p> <p>par two</p> <p>par three</p>",
      "</div>"].join("");
    assert.isTrue(articleSummaryView.toHtml() === expectedHtml);
  })();

})();
