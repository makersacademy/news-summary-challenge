describe('Article', function() {
  var article = new Article('Aliens landed on earth!')

  it('can be instantiated with a headline', function() {
    assert.isTrue(article instanceof Article)
    assert.isTrue(article.headline === 'Aliens landed on earth!')
  })

  it('returns headline', function() {
    assert.isTrue(article.returnHeadline() === 'Aliens landed on earth!')
  })
})
