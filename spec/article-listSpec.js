describe('Article list', function() {
  var articleList = new ArticleList()

  it('can be instantiated', function() {
    assert.isTrue(articleList instanceof ArticleList)
  })

  it('can create and store a new article', function() {
    articleList.create('A dinosaur was seen playing with a chicken')
    assert.isTrue(articleList.list[0].headline === 'A dinosaur was seen playing with a chicken' )
  })

  it('can show a list of articles', function() {
    assert.isTrue(articleList.showAll() === articleList.list)
  })
})
