(function() {
  describe('Headlines')

  let headlines = new Headlines()

  it('is an instance of Headlines')
  assert.isInstanceOf(headlines, Headlines)

  it('contains an array of NewsItems')
  // mocking here to ensure api call performed when instantiating Headlines retrieves sample json
  let exampleJSON  = loadJSON('test/example-api-response.json',
                              function(data) { console.log(data); },
                              function(xhr) { console.error(xhr); }
                              );
  assert.isTrue(headlines.array[0].title, "Jennifer Arcuri came late to the party. But the Johnson franchise is unthinkable without her now | Marina Hyde")

})();
