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
    var dummyPost = [
      {author: "author",
      title: "title",
      description: "description",
      url: "url",
      urlToImage: "image"}
    ]
    assert.isTrue(
      articlePrinter.list(dummyPost) == `<ul><li><h2><a href="url">title</a></h2></li>
                <li><div class='image'><img src="image"></div></li>
                <li><div class='author'>Source: author</div></li></ul>`,
      "test article printer returns html formatting for strings passed"
    );
  })();

})();
