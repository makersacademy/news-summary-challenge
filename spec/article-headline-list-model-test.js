let articleHeadlineList = new ArticleHeadlineList
// var articleHeadlineMock = {
//   returnTitle: function(){
//     return 'Corona Vaccine Created'
//   }
// }

it('can be instantiated', function(){
  expect(articleHeadlineList).toBeAnInstanceOf(ArticleHeadlineList)
})

it('instantiates with empty headline array', function(){
  expect(articleHeadlineList.headlines).toBeAnArray()
})

it('returns the headlines', function(){
  expect(articleHeadlineList.returnHeadlines()).toBeAnArray()
})

it('adds an ArticleHeadline model to the headlines array', function(){
  // creates new instance of article headline class in the function - how to mock?
  articleHeadlineList.addHeadline('Corona Vaccine Created')
  expect(articleHeadlineList.returnHeadlines()[0].returnTitle()).toEqual('Corona Vaccine Created')
})