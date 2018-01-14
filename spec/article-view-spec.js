function testCreateHtmlString() {

  var article = new Article("webTitle", "webUrl", "body");
  var articleView = new ArticleView(article);

  assert.isTrue(articleView.createHtmlString() === "<h1><a href='webUrl'>webTitle</a></h1><div>body</div>", "'createHtmlString' returns the headline and body in html")
};
testCreateHtmlString();
