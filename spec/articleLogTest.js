const articleInstance = {}

const MockArticle = {
  createArticle: function(first_value) {return articleInstance}
}



it('should store fixed number of articles by default', () => {
  const articleLog = new ArticleLog(MockArticle, mockResponse);
  length = articleLog.length;
  assert.equals(articleLog.collection().length, length);
});

it('should store six articles if told to', () => {
  const articleLog = new ArticleLog(MockArticle, mockResponse, 6);
  assert.equals(articleLog.collection().length, 6);
});


it('should give the first headline', () => {
  const articleLog = new ArticleLog(mockResponse);
  const EXPECTED_HEADLINE = 'Ukip members oust Henry Bolton as leader after only five months';
  assert.equals(articleLog.headlines()[0], EXPECTED_HEADLINE);
});

it('should store the last headline', () => {
  const articleLog = new ArticleLog(mockResponse);
  const EXPECTED_HEADLINE = 'Ukip leader Henry Bolton arrives at crucial party meeting';
  const lastIndex = articleLog.headlines().length - 1;
  assert.equals(articleLog.headlines()[lastIndex], EXPECTED_HEADLINE);
});

it('should store store only 1 article on a light news day', () => {
  const articleLog = new ArticleLog(lightNewsDay);
  assert.equals(articleLog.headlines().length, 1);
});
