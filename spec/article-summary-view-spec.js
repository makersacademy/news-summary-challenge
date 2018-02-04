function testCreateHtmlString() {

  var headline = new Headline("webTitle", "webUrl", "thumbnail");
  var articleSummary = new ArticleSummary(headline, ["summary"]);
  var articleSummaryView = new ArticleSummaryView(articleSummary);

  assert.isTrue(articleSummaryView.createHtmlString() === "<a href='webUrl'><img src=thumbnail><h1>webTitle</h1></a><p>summary</p>", "'createHtmlString' returns the headline and summary in html")
};
testCreateHtmlString();
