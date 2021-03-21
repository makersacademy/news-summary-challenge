describe('FrontPage', () => {
  describe('articles', () => {
    it('starts empty', () => {
      const newFrontPage = new FrontPage();
      expect(newFrontPage.articles.length).toEqual(0)
    });
  });

  describe('summaries', () => {
    it('starts empty', () => {
      const newFrontPage = new FrontPage();
      expect(newFrontPage.summaries.length).toEqual(0)
    });
  });
});
