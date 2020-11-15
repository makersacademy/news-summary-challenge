let article = new Article

it('can be instantiated', function(){
  expect(article).toBeAnInstanceOf(Article)
})

it('can return the title', function(){
  expect(article.returnTitle('Corona Vaccine Created')).toEqual('Corona Vaccine Created')
})

