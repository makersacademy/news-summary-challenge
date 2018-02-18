describe('article IDs', function(){

  articleid = new ArticleID()

  it('initialises to 0', function(){
    assert.isEqual(articleid.id, 0)
  })

  it('return an article id', function(){
    assert.isEqual(articleid.getID(), 0)
  })

  it('can be incremented', function(){
    articleid.increment()
    assert.isEqual(articleid.getID(), 1)
  })
})
