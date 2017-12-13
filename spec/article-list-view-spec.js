describe("checks that the article list is passed as parameter when instantiating a new ArticleListView", function(){
  var articleListView = new ArticleListView(new ArticleList())
  return assert.isTrue(articleListView._articleList instanceof ArticleList)
});

describe("places each title of an article in its respecive HTML elements", function () {
  var articleListView = new ArticleListView(new ArticleList())
  return assert.isTrue(articleListView.putInElements() === )
});
// console.log(testData)
// console.log(allNewsView.putInListElements())
// return assert.isTrue(allNewsView.putInListElements() === "<ol><li><div>West Ham United 1-0 Chelsea: Premier League – as it happened</div></li><li><div>Millennial railcard: a fare deal or quick fix that fails to deliver?</div></li></ol>")
