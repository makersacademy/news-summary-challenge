(function newArticle(){
  var article = new Article("Test Headline");
  assert.isTrue(article.showHeadline() === "Test Headline")
})();