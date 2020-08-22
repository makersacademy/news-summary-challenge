(function() {
  function testNewspaperIsAConstructor() {
    let newspaper = new Newspaper();

    assert.isTrue(newspaper instanceof Newspaper);
  };
  function testInstanceOfNewspaperHasArray() {
    let newspaper = new Newspaper();

    assert.isTrue(Array.isArray(newspaper.viewArticles()));
  };
  function testArticlesCanBeAddedToNewspaper() {
    let articleDouble = {};
    let newspaper = new Newspaper();
    newspaper.add(articleDouble);

    assert.isTrue(newspaper.viewArticles().includes(articleDouble)); 
  }

  testNewspaperIsAConstructor();
  testInstanceOfNewspaperHasArray();
  testArticlesCanBeAddedToNewspaper();
})();