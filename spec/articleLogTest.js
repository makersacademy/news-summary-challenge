function articleLogTest() {
  let articleInstance = 0;

  const MockArticle = {
    createArticle(data) {
      articleInstance = data;
      return articleInstance;
    },
  };


  it('should store articles', () => {
    const articleLog = new ArticleLog(unitMockResponse, MockArticle);
    assert.isTrue(articleLog.collection().includes(articleInstance));
  });

  it('should store fixed number of articles by default', () => {
    const articleLog = new ArticleLog(unitMockResponse, MockArticle);
    length = articleLog.length;
    assert.equals(articleLog.collection().length, length);
  });

  it('should store six articles if told to', () => {
    const articleLog = new ArticleLog(unitMockResponse, MockArticle, 6);
    assert.equals(articleLog.collection().length, 6);
  });

  it('should store store only 1 article on a light news day', () => {
    const articleLog = new ArticleLog(lightNewsDay, MockArticle);
    assert.equals(articleLog.collection().length, 1);
  });


  it('should give article data on one news story', () => {
    const articleLog = new ArticleLog(unitMockResponse, MockArticle);
    const expectedData = 'first';
    assert.equals(articleLog.collection()[0], expectedData);
  });

  it('should give article data on the third news story', () => {
    const articleLog = new ArticleLog(unitMockResponse, MockArticle);
    const expectedData = 'third';
    assert.equals(articleLog.collection()[2], expectedData);
  });

  it('should store the fifth article', () => {
    const articleLog = new ArticleLog(unitMockResponse, MockArticle);
    const expectedData = 'fifth';
    const lastIndex = articleLog.collection().length - 1;
    assert.equals(articleLog.collection()[lastIndex], expectedData);
  });
}
