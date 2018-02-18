it('should take out the headlines of an api', function() {
  let newsStore = new NewsStore(mockResponse);
  const EXPECTED_HEADLINE = 'Ukip members oust Henry Bolton as leader after only five months';
  assert.equals(newsStore.headlines[0], EXPECTED_HEADLINE)
})
