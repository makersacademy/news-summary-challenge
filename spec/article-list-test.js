var articleList = new ArticleList()

function testListContains() {
  articleList.addArticle('id', 'headline', 'summary', 'url', 'image')
  var describe = 'list should contain article'
  assert.isTrue(describe, articleList.list(),'[Article]')
};

testListContains();
