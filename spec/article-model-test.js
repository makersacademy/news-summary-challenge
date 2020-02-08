(function newArticle(){
  var article = new Article("Test Title");
  assert.isTrue(article.showTitle() === "Test Title")
})();