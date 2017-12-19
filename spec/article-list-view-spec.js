function DoubleArticle(url, title) {
  this._url = url
  this._title = title
}

function DoubleArticleList() {
  this._allArticles = [new DoubleArticle("testurl1", "testtitle1"), new DoubleArticle("testurl2", "testtitle2")]
}


describe(" ARTICLE LIST VIEW - checks that the article list is passed as parameter when instantiating a new ArticleListView", function(){
  var articleListView = new ArticleListView(new DoubleArticleList())
  return assert.isTrue(articleListView._articleList instanceof DoubleArticleList)
});

describe("ARTICLE LIST VIEW - places each title of an article in its respecive HTML elements", function () {
  var articleListView = new ArticleListView(new DoubleArticleList())
  console.log(articleListView.putInElements())
  return assert.isTrue(articleListView.putInElements() === '<ul><li><div><a href="#testurl1">testtitle1</a></div></li><li><div><a href="#testurl2">testtitle2</a></div></li></ul>')
});                                                        
