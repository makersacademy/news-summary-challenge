describe('Interface', () => {
  describe('fetchArticles', () => {
    it('makes fetch request to given url', () => {
      expect(fetchArticles()).toEqual('{"response":{"status":"ok","results":"Test OK"}}')
    });
  });
});
