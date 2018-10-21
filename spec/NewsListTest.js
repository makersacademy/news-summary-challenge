describe('News List', function() {

// var mockNewsArticl = {
//   'webTitle': "Alex Salmond speech – first minister hits back over Scottish independence",
//   'fields.body': "Body of article"
// }

  var newsList = new NewsList();

  it('Returns an empty array to begin with', function() {
    assert.isTrue(newsList.viewAll().length === 0);
  });

  it('Adds and returns news article headlines', function() {
    newsList.addArticle("Test headline");
    assert.isTrue(newsList.viewAll().length === 1);
  });

});
