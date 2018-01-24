var article = new Article("Headline 1", "url", "body");

function testInitializedArticleHeadline() {
  assert.isTrue(article.getHeadline() === "Headline 1", "Article is initialized with a headline");
};
testInitializedArticleHeadline();

function testInitializedArticleURL() {
  assert.isTrue(article.getURL() === "url", "Article is initialized with a url");
};
testInitializedArticleURL();
