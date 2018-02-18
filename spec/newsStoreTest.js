it('should store the first headline', () => {
  const newsStore = new NewsStore(mockResponse);
  console.log(newsStore);
  const EXPECTED_HEADLINE = 'Ukip members oust Henry Bolton as leader after only five months';
  assert.equals(newsStore.headlines()[0], EXPECTED_HEADLINE);
});

it('should store fixed number of articles by default', () => {
  const newsStore = new NewsStore(mockResponse);
  length = newsStore.length;
  assert.equals(newsStore.headlines().length, length);
});

it('should store six articles if told to', () => {
  const newsStore = new NewsStore(mockResponse, 6);
  assert.equals(newsStore.headlines().length, 6);
});

it('should store the last headline', () => {
  const newsStore = new NewsStore(mockResponse);
  const EXPECTED_HEADLINE = 'Ukip leader Henry Bolton arrives at crucial party meeting';
  const lastIndex = newsStore.headlines().length - 1;
  assert.equals(newsStore.headlines()[lastIndex], EXPECTED_HEADLINE);
});

it('should store store only 1 article on a light news day', () => {
  const newsStore = new NewsStore(lightNewsDay);
  assert.equals(newsStore.headlines().length, 1);
});
