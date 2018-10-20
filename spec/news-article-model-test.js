describe('News Article', function() {

var mockApiResponse = {'webTitle': "Alex Salmond speech – first minister hits back over Scottish independence"}

  it('Returns a news headline' , function() {
    var article = new NewsArticle(mockApiResponse)
    console.log(article);
    assert.isTrue(article.returnHeadline() === "Alex Salmond speech – first minister hits back over Scottish independence");
  });

});
