describe('News', function() {

  describe('.getBody', function() {

    it('returns the body', function() {
      news = new News('text', 'picture')
      return expect(news.getBody()).toEqual('text' + "\n" + 'picture')
    });

  });

  describe('.abbrBody', function() {

    it('abbreviates the body to 20 characters', function() {
      news = new News('This is a very long artcle')
      return expect(news.abbrBody(20)).toEqual('This is a very long ...')
    });

  });

});
