describe('Article', function() {
  var article = new Article('Aliens landed on earth!', 'Aliens have invaded our beloved planet and destroying everything!', 1,'20/10/2018')

  it('can be instantiated with a headline, body,id and date', function() {
    assert.isTrue(article instanceof Article)
    assert.isTrue(article.headline === 'Aliens landed on earth!')
    assert.isTrue(article.body === 'Aliens have invaded our beloved planet and destroying everything!')
    assert.isTrue(article.id === 1)
    assert.isTrue(article.date === '20/10/2018')
  })

  it('returns headline', function() {
    assert.isTrue(article.returnHeadline() === 'Aliens landed on earth!')
  })

  it('returns body', function() {
    assert.isTrue(article.returnBody() === 'Aliens have invaded our beloved planet and destroying everything!')
  })
})
