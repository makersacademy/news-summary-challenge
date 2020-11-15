let articleHeadlineList = new ArticleHeadlineList
var articleHeadlineMock = {
  returnTitle: function(){
    return 'Corona Vaccine Created'
  }
}

it('can be instantiated', function(){
  expect(articleHeadlineList).toBeAnInstanceOf(ArticleHeadlineList)
})

it('instantiates with empty headline array', function(){
  expect(articleHeadlineList.headlines).toBeAnArray()
})

it('returns the headlines', function(){
  expect(articleHeadlineList.returnHeadlines()).toBeAnArray()
})

it('adds a headline to the headlines array', function(){
  // new instance of article headline class - mock
  articleHeadlineList.addHeadline('Corona Vaccine Created')
  expect(articleHeadlineList.returnHeadlines()[0]).toEqual('Corona Vaccine Created')
})