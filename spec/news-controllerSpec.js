describe('News Controller', function() {
  function MockArticleList() {}
  MockArticleList.prototype.create = function() {
  }
  var list = new MockArticleList()

  function MockListView() {}

  MockListView.prototype.stringifyHeadline = function() {
    return '<div><a id="article0" href="#article/0">An alien was seen eating a burger</a></div>'
    }

  var newsController = new NewsController(list, MockListView);

  it('can be instantiated', function() {
    assert.isTrue(newsController instanceof NewsController)
  })

  it('can insert headline HTML', function() {
    window.onload = function() {
      newsController.insertHeadlineHtml()
      var app = document.getElementById('article0')
      assert.isTrue(app.innerHTML ===  'An alien was seen eating a burger')
    }
  })
})
