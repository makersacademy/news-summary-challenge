(function(exports) {
  function testNewspaperIsAConstructor() {
    var newspaper = new Newspaper();

    assert.isTrue(newspaper instanceof Newspaper);
  };
  function testInstanceOfNewspaperHasArray() {
    var article = new Article();
    var newspaper = new Newspaper();

    assert.isTrue(Array.isArray(newspaper.viewArticles()));
  };

  testNewspaperIsAConstructor();
  testInstanceOfNewspaperHasArray();
})(this);