describe('Article', () => {
  it('should have a title', () => {
    var article = new Article('this is a title')
    expect(article.showTitle()).toEq('this is a title')
  })
})
