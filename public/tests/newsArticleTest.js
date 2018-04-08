describe('NewsArticle', function() {
  describe('.photo', function() {
    it('Has a photo', function() {
      article = new NewsArticle('photo', 'description', 'summary', 'title');
      expect(article.photo()).toEqual('photo')
    });
  });
  describe('.desc', function() {
    it('Has a description', function() {
      article = new NewsArticle('photo', 'description', 'summary', 'title');
      return expect(article.desc()).toEqual('description')
    });
  });
  describe('.summary', function() {
    it('Has a summary', function() {
      article = new NewsArticle('photo', 'description', 'summary', 'title');
      return expect(article.summary()).toEqual('summary')
    });
  });
  describe('.title', function() {
    it('Has a summary', function() {
      article = new NewsArticle('photo', 'description', 'summary', 'title');
      return expect(article.title()).toEqual('title')
    });
  });
});
