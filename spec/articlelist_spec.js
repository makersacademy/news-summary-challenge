(function(exports) {
  function testSaveFunction() {
    articlelist = new ArticleList;
    articlelist.save("headline", "content", "url", "date")
    assert.isTrue(articlelist._articles[0].headline() === "headline")
  };

  testSaveFunction();
})(this);
