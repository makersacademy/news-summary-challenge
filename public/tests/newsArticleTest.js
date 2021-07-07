describe('NewsArticle', function() {
  describe('.photo', function() {
    it('Has a photo', function() {
      article = new NewsArticle('photo', 'website', 'title');
      expect(article.photo()).toEqual('photo')
    });
  });
  describe('.summary', function() {
    it('Has a website', function() {
      article = new NewsArticle('photo', 'website', 'title');
      return expect(article.webUrl()).toEqual('website')
    });
  });
  describe('.title', function() {
    it('Has a summary', function() {
      article = new NewsArticle('photo', 'website', 'title');
      return expect(article.title()).toEqual('title')
    });
  });
});
