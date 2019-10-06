(function() {
  describe('Headlines')

  let headlines = new Headlines()

  it('is an instance of Headlines')
  assert.isInstanceOf(headlines, Headlines)

  it('contains an array of NewsItems')
  let testApiPath = 'test/example-api-response.json'
  headlines.callGuardianApi(testApiPath,
                              function(data) { let responseText = data; },
                              function(xhr) { console.error(xhr); }
                              );
  let expectedTitle = "Jennifer Arcuri came late to the party. But the Johnson franchise is unthinkable without her now | Marina Hyde"
  assert.isTrue(responseText[0].webTitle, expectedTitle)

})();
