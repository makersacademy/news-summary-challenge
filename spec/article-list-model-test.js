let articleList = new ArticleList
// var articleHeadlineMock = {
//   returnTitle: function(){
//     return 'Corona Vaccine Created'
//   }
// }

it('can be instantiated', function(){
  expect(articleList).toBeAnInstanceOf(ArticleList)
})

it('instantiates with empty headline array', function(){
  expect(articleList.headlines).toBeAnArray()
})

it('returns the headlines', function(){
  expect(articleList.returnHeadlines()).toBeAnArray()
})

it('adds an ArticleHeadline model to the headlines array', function(){
  // creates new instance of article headline class in the function - how to mock?
  articleList.addHeadline('Corona Vaccine Created')
  expect(articleList.returnHeadlines()[0].returnTitle()).toEqual('Corona Vaccine Created')
})