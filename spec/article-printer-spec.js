(function(exports) {

  (function testArticlePrinter() {
    var articlePrinter = new ArticlePrinter();
    assert.isA(
      articlePrinter,
      ArticlePrinter
    );
  })();

  (function testSinglePrint() {
    var articlePrinter = new ArticlePrinter();
    assert.isTrue(
      articlePrinter.single("test") === "<li><div>test</li></div>",
      "test article printer returns html formatting for strings passed"
    );
  })();


})();
