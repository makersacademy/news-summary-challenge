describe('News Article List', function() {

  var newsArticleList = new NewsArticleList();

  it('Returns an empty array to begin with', function() {
    assert.isTrue(newsArticleList.viewAll().length === 0);
  });

  it('Adds and returns news article headlines', function() {
    newsArticleList.addArticle("Test headline");
    assert.isTrue(newsArticleList.viewAll().length === 1);
  });

});
