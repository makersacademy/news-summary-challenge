describe('Viewing articles in a list', function(){

  articlelist = new ArticleList()

  it('starts as an empty array', function(){
    assert.isEqual(articlelist.articles.length, 0)
  })
})
