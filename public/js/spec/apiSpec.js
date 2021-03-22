describe('Api', () => {
  describe('fetchArticles', () => {
    it('makes fetch request to given url', () => {
      frontPage.articles = []
      expect(fetchArticles()).toEqual('{"response":{"status":"ok","results":"Test OK"}}')
    });

    it('stores the results in frontPage.articles', () => {
      frontPage.articles = []
      fetchArticles();
      expect(frontPage.articles).toEqual('{"response":{"status":"ok","results":"Test OK"}}')
    });
  });

  describe('fetchSummaries', () => {
    it('makes fetch request to given url', () => {
      frontPage.articles = []
      expect(fetchSummaries()).toEqual('{"response":{"status":"ok","results":"Test OK"}}')
    });

    it('stores the results in frontPage.articles', () => {
      frontPage.articles = []
      fetchSummaries();
      expect(frontPage.summaries).toInclude('{"response":{"status":"ok","results":"Test OK"}}')
    });
  });
});
