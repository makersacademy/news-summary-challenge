let articleHeadline = new ArticleHeadline

it('can be instantiated', function(){
  expect(articleHeadline).toBeAnInstanceOf(ArticleHeadline)
})

it('can return the title', function(){
  expect(articleHeadline.returnTitle('Corona Vaccine Created')).toEqual('Corona Vaccine Created')
})

