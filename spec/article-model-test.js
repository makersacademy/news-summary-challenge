let article = new Article('Corona Vaccine Created', 'Scientists have created an 80% effective vaccine')
// did not throw error when new Article was not passed an argument

it('can be instantiated', function(){
  expect(article).toBeAnInstanceOf(Article)
})

it('can return the title', function(){
  expect(article.returnTitle()).toEqual('Corona Vaccine Created')
})

it('can return the article summary', function(){
  expect(article.returnSummary()).toEqual('Scientists have created an 80% effective vaccine')
})

