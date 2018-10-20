describe('Article list', function() {
  var articleList = new ArticleList()

  it('can be instantiated', function() {
    assert.isTrue(articleList instanceof ArticleList)
  })

  it('starts with an empty array', function() {
    assert.isEmpty(articleList.list)
  })

  it('can create and store a new article', function() {
    articleList.create('A dinosaur was seen playing with a chicken', 'A dinosaur was playing with a chicken in a green field.')
    assert.isTrue(articleList.list[0].headline === 'A dinosaur was seen playing with a chicken' )
    assert.isTrue(articleList.list[0].body === 'A dinosaur was playing with a chicken in a green field.')
    assert.isTrue(articleList.list[0].id === 0)
  })

  it('can show a list of articles', function() {
    assert.isTrue(articleList.showAll() === articleList.list)
  })
})
