(function() {
  describe('Headlines')

  let headlines = new Headlines()

  it('is an instance of Headlines')
  assert.isInstanceOf(headlines, Headlines)

  it('can get news items from the Guardian api')
  let testApiPath = 'test/example-api-response.json'
  headlines.callGuardianApi(testApiPath,
                              function(xhr) { console.error(xhr); });
  let expectedTitle = "Jennifer Arcuri came late to the party. But the Johnson franchise is unthinkable without her now | Marina Hyde"
  assert.isTrue(responseText[0].webTitle, expectedTitle)

  it('contains an array of NewsItems')
  headlines.createNewsItems(responseText);
  assert.isTrue(headlines.newsArray[0]._webTitle, expectedTitle)

})();
