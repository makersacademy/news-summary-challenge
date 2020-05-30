(function () {
  let headlinesList = new HeadlinesList();

  function testStartsWithAnEmptyList() {
    assert.isTrue(Array.isArray(headlinesList.headlines));
    assert.isTrue(headlinesList.headlines.length === 0);
  }

  function testAddHeadlineToHeadlinesList() {
    let headline = new Headline();

    headlinesList.addHeadline(headline);

    assert.isTrue(headlinesList.headlines.length !== 0);
    assert.isTrue(headlinesList.headlines.length === 1);
    assert.isTrue(headlinesList.headlines.includes(headline));
  }

  testStartsWithAnEmptyList();
  testAddHeadlineToHeadlinesList();
})();
