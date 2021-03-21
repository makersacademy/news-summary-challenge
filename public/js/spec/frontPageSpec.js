let frontPage;

describe('FrontPage', () => {
  describe('articles', () => {
    it('starts empty', () => {
      frontPage = new FrontPage
      expect(frontPage.articles.length).toEqual(0)
    });
  });

  describe('add', () => {
    it('adds new article to articles', () => {
      frontPage = new FrontPage;
      const article = {headline: 'Test', body: 'testing123'}
      frontPage.add(article)
      expect(frontPage.articles).toInclude(article);
    });
  });
});
