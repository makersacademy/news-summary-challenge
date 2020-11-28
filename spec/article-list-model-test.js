let testArticleList = new ArticleList
testArticleList.addArticle('Corona Vaccine Created', 'Scientists have created an 80% effective vaccine')
// .addArticle creates a new instance of the Article class - need to mock/separate

it('can be instantiated', function(){
  expect(testArticleList).toBeAnInstanceOf(ArticleList)
})

it('instantiates with empty article array', function(){
  expect(testArticleList.articles).toBeAnArray()
})

it('returns all articles array', function(){
  expect(testArticleList.returnArticles()).toBeAnArray()
})

it('returns the headlines', function(){
  expect(testArticleList.returnHeadlines()[0]).toEqual('Corona Vaccine Created')
})

it('adds an Article model to the articles array', function(){
  expect(testArticleList.returnArticles()[0].returnTitle()).toEqual('Corona Vaccine Created')
})

it('fetches a specific article by id number', function(){
  expect(testArticleList.getArticle(0)).toBeAnInstanceOf(Article)
})

