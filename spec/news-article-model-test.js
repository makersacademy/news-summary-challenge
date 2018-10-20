describe('News Article', function() {

var mockApiResponse = {'webTitle': "Alex Salmond speech – first minister hits back over Scottish independence"}

  it('Returns a news headline' , function() {
    var headline = "Alex Salmond speech – first minister hits back over Scottish independence"
    var article = new NewsArticle(headline)
    assert.isTrue(article.returnHeadLine() === "Alex Salmond speech – first minister hits back over Scottish independence");
  });

});
