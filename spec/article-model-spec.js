function testInitializedArticle() {
  var article = new Article("Headline 1");
  assert.isTrue(article.getHeadline() === "Headline 1", "Article is initialized with a headline");
};
testInitializedArticle();
