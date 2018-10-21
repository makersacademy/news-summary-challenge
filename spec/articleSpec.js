describe('Article', function() {
  var article = new Article('Aliens landed on earth!', 0,'20/10/2018', 'www.aliennews.co.uk')

  it('can be instantiated with a headline,id and date', function() {
    assert.isTrue(article instanceof Article)
    assert.isTrue(article.headline === 'Aliens landed on earth!')
    assert.isTrue(article.id === 0)
    assert.isTrue(article.date === '20/10/2018')
  })

  it('returns headline', function() {
    assert.isTrue(article.returnHeadline() === 'Aliens landed on earth!')
  })

  it('returns date', function() {
    assert.isTrue(article.returnDate() === '20/10/2018')
  })

  it('returns url', function() {
    assert.isTrue(article.returnLink() === 'www.aliennews.co.uk')
  })
})
