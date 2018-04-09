describe('NewsList', function() {

  describe('.add', function() {

    it('Stores News', function() {
      testNewsList = new NewsList();
      testNewsList.add('news test body', 'news test picture');
      expect(testNewsList.all()).toContain('news test body')
    });

  });

});
