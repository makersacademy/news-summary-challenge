(function () {
  let headlinesList = new HeadlinesList();

  function testStartsWithAnEmptyList() {
    assert.isTrue(Array.isArray(headlinesList.headlines));
    assert.isTrue(headlinesList.headlines.length === 0);
  }

  testStartsWithAnEmptyList();
})();
