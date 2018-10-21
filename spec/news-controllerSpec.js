describe('News Controller', function() {
  function MockArticleList() {}
  MockArticleList.prototype.create = function() {
  }
  var list = new MockArticleList()

  function MockListView() {}

  MockListView.prototype.stringifyHeadline = function() {
    return '<div><a href="#article/0">An alien was seen eating a burger</a></div>'
    }

  var newsController = new NewsController(list, MockListView);

  it('can be instantiated', function() {
    assert.isTrue(newsController instanceof NewsController)
  })
})
