describe('Article list view', function() {

  function MockArticle(){
    this.headline = 'An alien was seen eating a burger'
    this.id = 0
  }

  function MockArticleList() {
    this.list = []
  }

  MockArticleList.prototype.create = function(headline) {
    this.list.push(headline)
  }
  var mockArticle = new MockArticle()
  var mockArticleList = new MockArticleList()
  mockArticleList.create(mockArticle)
  var articleListView = new ArticleListView(mockArticleList)

  it('can be instantiated with an article list', function() {
    assert.isTrue(articleListView instanceof ArticleListView)
  })

  it('returns headline as HTML string', function() {
    assert.isTrue(articleListView.stringifyHeadline() === "<div id='article'>undefined<a href='#article/0'>An alien was seen eating a burger</a> <br><br><a href='undefined'>Read full article</a></div>")
  })
})
