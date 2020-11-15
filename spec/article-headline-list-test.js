let articleHeadlineList = new ArticleHeadlineList

it('can be instantiated', function(){
  expect(articleHeadlineList).toBeAnInstanceOf(ArticleHeadlineList)
})

it('instantiates with empty headline array', function(){
  expect(articleHeadlineList.headlines).toBeAnArray()
})