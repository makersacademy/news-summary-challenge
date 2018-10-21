describe('News Controller', function() {
  function MockArticleList() {}
  MockArticleList.prototype.create = function() {
  }
  var list = new MockArticleList()

  function MockListView() {}

  MockListView.prototype.stringifyHeadline = function() {
    return '<ul><li><div><a href="article/#0">An alien was seen eating a burger</a></div></li></ul>'
    }

  var newsController = new NewsController(list, MockListView);

  it('can be instantiated', function() {
    assert.isTrue(newsController instanceof NewsController)
  })

  it('can insert headline HTML', function() {
    window.onload = function() {
      newsController.insertHeadlineHtml()
      var app = document.getElementById('content')
      assert.isTrue(app.innerHTML ===  '<ul><li><div><a href="article/#0">An alien was seen eating a burger</a></div></li></ul>')
    }
  })
})
