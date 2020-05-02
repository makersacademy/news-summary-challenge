(function newArticle() {
  var article = new Article("Test Headline");
  assert.isTrue(article.showHeadline() === "Test Headline");
  console.log("Test 1 Passing");
})();
