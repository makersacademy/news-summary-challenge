describe('AllNews', function() {
  describe('.add', function() {
    it('Stores a note', function() {
      allNews = new AllNews();
      allNews.add('wowzers');
      return expect(allNews.all()).toContain('wowzers')
    });
  });
});
