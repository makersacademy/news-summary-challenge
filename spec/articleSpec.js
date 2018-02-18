
describe ('viewing an article', function(){

  article = new Article('headline', 'body')

  it('user can view an articles headline', function(){
    assert.isEqual(article.getHeadline(), 'headline')
  })

  it('user can view an articles body', function(){
    assert.isEqual(article.getBody(), 'body')
  })
})
