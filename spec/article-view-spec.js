function testCreateHtmlString() {

  var article = new Article("webTitle", "webUrl");
  var articleView = new ArticleView(article);

  assert.isTrue(articleView.createHtmlString("summary") === "<h1><a href='webUrl'>webTitle</a></h1><div>summary</div>", "'createHtmlString' returns the headline and summary in html")
};
testCreateHtmlString();
