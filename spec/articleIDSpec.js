describe('article IDs', function(){

  ArticleID.prototype.init()

  it('initialises to 0', function(){
    assert.isEqual(ArticleID.prototype.getID(), 0)
  })

  it('can be incremented', function(){
    ArticleID.prototype.increment()
    assert.isEqual(ArticleID.prototype.getID(), 1)
  })
})
