(function() {
  describe('Headlines')
  it('is an instance of Headlines')
  let headlines = new Headlines()
  assert.isInstanceOf(headlines, Headlines)
})();

(function() {
  describe('HeadlinesView')
  it('contains a list of newsitems')
  // mocking here to ensure api call performed when instantiating Headlines retrieves sample json
  let headlines = new Headlines
  assert.isTrue(headlines.list[0].title, "Jennifer Arcuri came late to the party. But the Johnson franchise is unthinkable without her now | Marina Hyde")
})();
