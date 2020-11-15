let articleList = new ArticleList
// var articleHeadlineMock = {
//   returnTitle: function(){
//     return 'Corona Vaccine Created'
//   }
// }

it('can be instantiated', function(){
  expect(articleList).toBeAnInstanceOf(ArticleList)
})

it('instantiates with empty article array', function(){
  expect(articleList.articles).toBeAnArray()
})

it('returns all articles array', function(){
  expect(articleList.returnArticles()).toBeAnArray()
})

it('returns the headlines', function(){
  articleList.addArticle('Corona Vaccine Created', 'Scientists have created an 80% effective vaccine')
  expect(articleList.returnHeadlines()[0]).toEqual('Corona Vaccine Created')
})

it('adds an Article model to the articles array', function(){
  // creates new instance of article headline class in the function - how to mock?
  articleList.addArticle('Corona Vaccine Created', 'Scientists have created an 80% effective vaccine')
  expect(articleList.returnArticles()[0].returnTitle()).toEqual('Corona Vaccine Created')
})

it('fetches a specific article by id number', function(){
  // may need article mocking
  articleList.addArticle('Corona Vaccine Created', 'Scientists have created an 80% effective vaccine')
  expect(articleList.getArticle(0)).toBeAnInstanceOf(Article)
})