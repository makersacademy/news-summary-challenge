describe ('creating an article', function(){

  article = new Article('headline', 'body', 'url', 'thumbnail')

  it('user can view an articles headline', function(){
    assert.isEqual(article.getHeadline(), 'headline')
  })

  it('user can view an articles body', function(){
    assert.isEqual(article.getBody(), 'body')
  })

  it('user can view an articles url', function(){
    assert.isEqual(article.getUrl(), 'url')
  })

  it('user can view an articles thumbnail', function(){
    assert.isEqual(article.getThumbnail(), 'thumbnail')
  })
})
