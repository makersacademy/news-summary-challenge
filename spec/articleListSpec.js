(function() {
  function FakeArticle(id) {
   	this._id = id;
  }

  FakeArticle.prototype.getId = function () {
  	return this._id;
  }

  runner.register(function testGetArticlesReturnsArray() {
    var articleList = new ArticleList()
    var articleListArrayString = JSON.stringify(articleList.getArticles())
    return assert.returns(articleListArrayString, "[]")
  });

  runner.register(function testAddArticleToArrayLength() {
    var articleList = new ArticleList()
    articleList.addArticle("test", "test", "test", "test", FakeArticle)
    return assert.returns(articleList.getArticles().length, 1)
  })

  runner.register(function testAddArticleToArrayID() {
    var articleList = new ArticleList()
    articleList.addArticle("test", "test", "test", "test", FakeArticle)
    return assert.returns(articleList.getArticles()[0].getId(), "test")
  })

})()
