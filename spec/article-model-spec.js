var article = new Article("Headline 1", "url", "summary");

function testInitializedArticleHeadline() {
  assert.isTrue(article.getHeadline() === "Headline 1", "Article is initialized with a headline");
};
testInitializedArticleHeadline();

function testInitializedArticleURL() {
  assert.isTrue(article.getURL() === "url", "Article is initialized with a url");
};
testInitializedArticleURL();

function testInitializedArticleSummary() {
  assert.isTrue(article.getSummary() === "summary", "Article is initialized with summary text");
};
testInitializedArticleSummary();
