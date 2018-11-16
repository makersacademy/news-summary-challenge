describe('ArticleListView', function() {
  it('create a new ArticleListView', function() {
    var articleListView = new ArticleListView()
    expect(articleListView).toBeAnInstanceOf(ArticleListView)
  });

  describe('#renderView', function() {
    it('returns the headlines of 2 articles to be displayed', function() {
      var articleList = new ArticleList()
      articleList.add("Headline 1", 'Body 1')
      articleList.add("Headline 2", 'Body 2')

      var articleListView = new ArticleListView(articleList)
      console.log(articleListView.renderView());
      expect(articleListView.renderView())
        .toEqual('<ul><li>Headline 1</li><li>Headline 2</li></ul>');
    });
  });
});
