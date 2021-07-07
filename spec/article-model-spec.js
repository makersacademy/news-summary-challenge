describe('Article', () => {
  it('should have a title, url and id', () => {
    var article = new Article('this is a title','url.com', 'this is a id')
    
    expect(article.showTitle()).toEq('this is a title')
    expect(article.url).toEq('url.com')
    expect(article.id).toEq('this is a id')
  })
})
