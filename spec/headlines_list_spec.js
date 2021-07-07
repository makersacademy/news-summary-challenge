(function () {
  let headlinesList = new HeadlinesList();
  let headline = new Headline();

  function testStartsWithAnEmptyList() {
    assert.isTrue(Array.isArray(headlinesList.headlines));
    assert.isTrue(headlinesList.headlines.length === 0);
  }

  function testAddHeadlineToHeadlinesList() {
    headlinesList.addHeadline(headline);

    assert.isTrue(headlinesList.headlines.length !== 0);
    assert.isTrue(headlinesList.headlines.length === 1);
    assert.isTrue(headlinesList.headlines.includes(headline));
  }

  function testReturnHeadlines() {
    assert.isTrue(headlinesList.returnHeadlines() === headlinesList.headlines);
    assert.isTrue(headlinesList.returnHeadlines()[0] === headline);
  }

  testStartsWithAnEmptyList();
  testAddHeadlineToHeadlinesList();
  testReturnHeadlines();
})();
